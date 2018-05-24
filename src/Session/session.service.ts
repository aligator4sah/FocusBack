import { Component ,Inject} from "@nestjs/common";
import {Repository, getRepository, getConnection} from 'typeorm';
import {ISessionService,ISession} from "./Interfaces";
import {SessionEntity} from "./session.entity";
import {AnswerEntity} from "../Answer/answer.entity";
import {DomainEntity} from '../DomainForQuestionnaire/Domain/domain.entity';
import {QuestionnaireEntity} from '../Questionnaire/questionnaire.entity';

@Component()
export class SessionService implements ISessionService {
    constructor(@Inject('SessionRepository') private readonly sessionRepository: Repository<SessionEntity>,
                @Inject('AnswerRepository') private readonly answerRepository: Repository<AnswerEntity>) {
    }

    public async getAllSession(): Promise<Array<SessionEntity>> {
        return await this.sessionRepository.find();
    }

    public async getSessionByUserId(userId: number): Promise<Array<SessionEntity>> {
        return await this.sessionRepository.find({where: {userid: userId}});
    }

    public async getSessionById(id: number): Promise<SessionEntity | null> {
        return await this.sessionRepository.findOneById(id);
    }

    public async createSession(session: ISession): Promise<SessionEntity> {
        // const fakeSession = {id:0,userid:0,createdate:0,updatedate:0};
        return await this.sessionRepository.save(session);
    }

    public async addSession(sessionId: number, session: ISession): Promise<SessionEntity> {
        const selectedSession = await this.sessionRepository.findOneById(sessionId);
        console.log(selectedSession);
        for (let answer of session.answer) {
            const selectedAnswer = await this.answerRepository.save(answer);
            await getConnection().createQueryBuilder().relation(AnswerEntity, "session")
                .of(selectedAnswer.id).set(selectedSession.id);
        }
        return await this.sessionRepository.findOneById(selectedSession.id);
    }

    // public async addSession(session:ISession):Promise<SessionEntity>{
    //     const selectedSession = await this.sessionRepository.save(session);
    //     console.log(selectedSession);
    //     console.log(session.answer);
    //     for(let answer of session.answer){
    //         const selectedAnswer = await this.answerRepository.save(answer);
    //         await getConnection().createQueryBuilder().relation(AnswerEntity,"session")
    //             .of(selectedAnswer.id).set(selectedSession.id);
    //     }
    //     return await this.sessionRepository.findOneById(selectedSession.id);
    // }
    //modification required
    public async updateSession(sessionId: number, newSession: ISession): Promise<SessionEntity | null> {
        const selectedSession = await this.sessionRepository.findOneById(sessionId);
        if (!selectedSession) {
            console.log('session does not exist');
        }
        await this.sessionRepository.updateById(sessionId, newSession);
        // for(let answer of await selectedSession.answer){
        //     const selectedAnswer = await getConnection().createQueryBuilder()
        //         .insert().into(AnswerEntity).values(answer).execute();
        //     await getConnection().createQueryBuilder().relation(AnswerEntity,"session")
        //         .of(selectedAnswer.id).set(selectedSession.id);
        // }
        const requiredSession = await getConnection().getRepository(SessionEntity).createQueryBuilder("session")
            .leftJoinAndSelect("session.answer", "answer").where("session.id = :id", {id: sessionId})
            .getOne();
        for (let i = 0; i < await requiredSession.answer.length; i++) {
            await this.answerRepository.updateById(requiredSession.answer[i].id, newSession.answer[i]);
        }
        return await this.sessionRepository.findOneById(sessionId);
    }

    public async deleteSession(sessionId: number): Promise<Array<SessionEntity>> {
        const selectedSession = await getConnection().getRepository(SessionEntity)
            .createQueryBuilder("session").leftJoinAndSelect("session.answer", "answer")
            .where("session.id = :id", {id: sessionId})
            .getOne();
        const userId = await selectedSession.userid;
        for (let answer of await selectedSession.answer) {
            await getConnection().createQueryBuilder().relation(AnswerEntity, "session")
                .of(answer.id).set(null);
        }
        await this.sessionRepository.deleteById(sessionId);
        const deletedSession = await this.sessionRepository.findOneById(sessionId);
        if (deletedSession) {
            return await this.sessionRepository.find({where: {userid: userId}});
        } else {
            return null;
        }
    }


    public async calculateScore(sessionId: number): Promise<Array<object>> {
        let result = [];
        const selectedSession = await getRepository(SessionEntity).createQueryBuilder("session")
            .leftJoinAndSelect("session.answer", "answer")
            .where("session.id = :id", {id: sessionId})
            .getOne();
        const selectedDomains = await getConnection().getRepository(DomainEntity).createQueryBuilder("domain").getMany();
        await selectedDomains.forEach((domainItem) => {
            let answersGroupByDomain = selectedSession.answer.filter((answer) => answer.domain === domainItem.domain);
            let domainScore: number = 0;
            answersGroupByDomain.forEach((item) => {
                domainScore += item.answer.point * item.weight;
                console.log(domainScore);
            })
            let domainMax: number = domainItem.maxScore;
            let domainMin: number = domainItem.minScore;
            domainScore = parseFloat(((domainScore - domainMin) / (domainMax - domainMin)).toFixed(2));
            console.log(domainScore);
            domainScore = domainScore < 0 ? 0 : domainScore;
            result.push({domain: domainItem.domain, score: domainScore});
        });
        let overallScore: number = 0;
        // await result.forEach((item) => {
        //     overallScore += item.score;
        // })
        // overallScore = Array.zip(result, selectedDomains, (result, selectedDomains) => {
        //     return result.score * selectedDomains.domain;
        // }).reduce((acc, cur) => {
        //     return acc + cur;
        // });

        for (let counter = 0; counter < Math.min(result.length, selectedDomains.length); counter++){
            overallScore = result[counter].score * selectedDomains[counter].weight;
        }
        await result.push({domain: "WellnessScore", score: overallScore});
        return await result;
    }

    // public async getQuestionAndAnswerBySesionId(sessionId:number):Promise<Array<object>>{
    //     return await getConnection().getRepository(AnswerEntity).createQueryBuilder("answer")
    //         .leftJoinAndSelect("answer.session","session")
    //         .where("session.id = :id",{id:sessionId})
    //         .leftJoinAndSelect(QuestionnaireEntity,"questionnaire","questionnaire.id = answer.questionid ")
    //         .leftJoinAndSelect("questionnaire.domain","domain")
    //         .leftJoinAndSelect("questionnaire.subdomain","subdomain")
    //         .getMany();
    // }

    // public async getQuestionAndAnswerBySessionId(sessionId:number):Promise<Array<object>> {
    //     // let result:Array<object> = [];
    //     const selectedAnswer = await getConnection().getRepository(AnswerEntity).createQueryBuilder("answer")
    //         .leftJoinAndSelect("answer.session", "session")
    //         .where("session.id = :id", {id: sessionId})
    //         .getMany()
    //         .then(async (answers) => {
    //             await answers.forEach(async (answer) => {
    //                 const selectedQuestionnaire = await getConnection().getRepository(QuestionnaireEntity).createQueryBuilder("questionnaire")
    //                     .leftJoinAndSelect("questionnaire.domain", "domain")
    //                     .leftJoinAndSelect("questionnaire.subdomain", "subdomain")
    //                     .where("questionnaire.id = :id", {id: answer.questionid})
    //                     .getOne();
    //                 answer["questionnaire"] = selectedQuestionnaire;
    //             })
    //             console.log(answers);
    //             return await answers;
    //         });
    //     return selectedAnswer;
    // }

    // public async getQuestionAndAnswerBySessionId(sessionId:number):Promise<Array<object>>{
    //     let answers:Array<object> = [];
    //     await getConnection().getRepository(AnswerEntity).createQueryBuilder("answer")
    //         .leftJoinAndSelect("answer.session","session")
    //         .where("session.id = :id",{id:sessionId})
    //         .getMany().then(async(answers) => {
    //             const result = await answers.map(async (answer) => {
    //                 answer["questionnaire"] = await getConnection().getRepository(QuestionnaireEntity).createQueryBuilder("questionnaire")
    //                     .leftJoinAndSelect("questionnaire.domain", "domain")
    //                     .leftJoinAndSelect("questionnaire.subdomain", "subdomain")
    //                     .where("questionnaire.id = :id", {id: answer.questionid})
    //                     .getOne();
    //                 return answer;
    //             });
    //             return result;
    //         }).then(
    //             (result) => {
    //                 answers = result;
    //             }
    //         );
    //     console.log(answers);
    //     return answers;
    //
    // }

    public async getQuestionAndAnswerBySessionId(sessionId:number):Promise<Array<object>>{
        // let solution:Array<object> = [];
        const selectedAnswers = await getConnection().getRepository(AnswerEntity).createQueryBuilder("answer")
            .leftJoinAndSelect("answer.session","session")
            .where("session.id = :id",{id:sessionId})
            .getMany();
        // .getMany().then(async(answers) => {
        //     const result = await answers.map(async (answer) => {
        //         answer["questionnaire"] = await getConnection().getRepository(QuestionnaireEntity).createQueryBuilder("questionnaire")
        //             .leftJoinAndSelect("questionnaire.domain", "domain")
        //             .leftJoinAndSelect("questionnaire.subdomain", "subdomain")
        //             .where("questionnaire.id = :id", {id: answer.questionid})
        //             .getOne();
        //         return answer;
        //     });
        //     solution =  result;
        // });
        return await Promise.all(selectedAnswers.map(async (answer) => {
            const selectedQuestionnaire =  await getConnection().getRepository(QuestionnaireEntity).createQueryBuilder("questionnaire")
                .leftJoinAndSelect("questionnaire.domain", "domain")
                .leftJoinAndSelect("questionnaire.subdomain", "subdomain")
                .where("questionnaire.id = :id", {id: answer.questionid})
                .getOne();
            return {answer:answer,questionnaire:selectedQuestionnaire };
        }));
    }
}
