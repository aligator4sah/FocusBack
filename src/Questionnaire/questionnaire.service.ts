import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import { QuestionnaireEntity} from "./questionnaire.entity";
import { IQuestionnaire,IQuestionnaireService} from "./Interfaces";

@Component()
export class QuestionnaireService implements IQuestionnaireService{
    constructor(
        @Inject('QuestionnaireRepository') private readonly questionnaireRepository: Repository<QuestionnaireEntity>
    ){}

    public async getAllQuestionnaire():Promise<Array<QuestionnaireEntity>>{
        return await this.questionnaireRepository.find()
    }
    public async getQuestionnaire(id:number):Promise<QuestionnaireEntity|null>{
        return await this.questionnaireRepository.findOneById(id);
    }
    public async addQuestionnaire(questionnaire:IQuestionnaire):Promise<QuestionnaireEntity>{
        return await this.questionnaireRepository.save(questionnaire);
    }
    public async updateQuestionnaire(id:number,newQuestionnaire:IQuestionnaire):Promise<QuestionnaireEntity|null>{
        const questionnaire = await this.questionnaireRepository.findOneById(id);
        if(!questionnaire){
            console.log("questionnaire does not exist");
        }
        await this.questionnaireRepository.updateById(id,newQuestionnaire);
        return await this.questionnaireRepository.findOneById(id);
    }
    public async deleteQuestionnaire(id:number):Promise<string>{
        await this.questionnaireRepository.deleteById(id);
        const questionnaire = this.questionnaireRepository.findOneById(id);
        if(questionnaire){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }

    public async getQuestionnaireByDomain(){

    }
}