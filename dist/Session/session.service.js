"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const session_entity_1 = require("./session.entity");
const answer_entity_1 = require("../Answer/answer.entity");
const domain_entity_1 = require("../DomainForQuestionnaire/Domain/domain.entity");
const questionnaire_entity_1 = require("../Questionnaire/questionnaire.entity");
let SessionService = class SessionService {
    constructor(sessionRepository, answerRepository) {
        this.sessionRepository = sessionRepository;
        this.answerRepository = answerRepository;
    }
    getAllSession() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.find();
        });
    }
    getSessionByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.find({ where: { userid: userId } });
        });
    }
    getSessionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.findOneById(id);
        });
    }
    createSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.save(session);
        });
    }
    addSession(sessionId, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSession = yield this.sessionRepository.findOneById(sessionId);
            console.log(selectedSession);
            for (let answer of session.answer) {
                const selectedAnswer = yield this.answerRepository.save(answer);
                yield typeorm_1.getConnection().createQueryBuilder().relation(answer_entity_1.AnswerEntity, "session")
                    .of(selectedAnswer.id).set(selectedSession.id);
            }
            return yield this.sessionRepository.findOneById(selectedSession.id);
        });
    }
    updateSession(sessionId, newSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSession = yield this.sessionRepository.findOneById(sessionId);
            if (!selectedSession) {
                console.log('session does not exist');
            }
            yield this.sessionRepository.updateById(sessionId, newSession);
            const requiredSession = yield typeorm_1.getConnection().getRepository(session_entity_1.SessionEntity).createQueryBuilder("session")
                .leftJoinAndSelect("session.answer", "answer").where("session.id = :id", { id: sessionId })
                .getOne();
            for (let i = 0; i < (yield requiredSession.answer.length); i++) {
                yield this.answerRepository.updateById(requiredSession.answer[i].id, newSession.answer[i]);
            }
            return yield this.sessionRepository.findOneById(sessionId);
        });
    }
    deleteSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSession = yield typeorm_1.getConnection().getRepository(session_entity_1.SessionEntity)
                .createQueryBuilder("session").leftJoinAndSelect("session.answer", "answer")
                .where("session.id = :id", { id: sessionId })
                .getOne();
            const userId = yield selectedSession.userid;
            for (let answer of yield selectedSession.answer) {
                yield typeorm_1.getConnection().createQueryBuilder().relation(answer_entity_1.AnswerEntity, "session")
                    .of(answer.id).set(null);
            }
            yield this.sessionRepository.deleteById(sessionId);
            const deletedSession = yield this.sessionRepository.findOneById(sessionId);
            if (deletedSession) {
                return yield this.sessionRepository.find({ where: { userid: userId } });
            }
            else {
                return null;
            }
        });
    }
    calculateScore(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            const selectedSession = yield typeorm_1.getRepository(session_entity_1.SessionEntity).createQueryBuilder("session")
                .leftJoinAndSelect("session.answer", "answer")
                .where("session.id = :id", { id: sessionId })
                .getOne();
            const selectedDomains = yield typeorm_1.getConnection().getRepository(domain_entity_1.DomainEntity).createQueryBuilder("domain").getMany();
            yield selectedDomains.forEach((domainItem) => {
                let answersGroupByDomain = selectedSession.answer.filter((answer) => answer.domain === domainItem.domain);
                let domainScore = 0;
                answersGroupByDomain.forEach((item) => {
                    domainScore += item.answer.point * item.weight;
                    console.log(domainScore);
                });
                let domainMax = domainItem.maxScore;
                let domainMin = domainItem.minScore;
                domainScore = parseFloat(((domainScore - domainMin) / (domainMax - domainMin)).toFixed(2));
                console.log(domainScore);
                domainScore = domainScore < 0 ? 0 : domainScore;
                result.push({ domain: domainItem.domain, score: domainScore });
            });
            let overallScore = 0;
            for (let counter = 0; counter < Math.min(result.length, selectedDomains.length); counter++) {
                overallScore = result[counter].score * selectedDomains[counter].weight;
            }
            yield result.push({ domain: "WellnessScore", score: overallScore });
            return yield result;
        });
    }
    getQuestionAndAnswerBySessionId(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedAnswers = yield typeorm_1.getConnection().getRepository(answer_entity_1.AnswerEntity).createQueryBuilder("answer")
                .leftJoinAndSelect("answer.session", "session")
                .where("session.id = :id", { id: sessionId })
                .getMany();
            return yield Promise.all(selectedAnswers.map((answer) => __awaiter(this, void 0, void 0, function* () {
                const selectedQuestionnaire = yield typeorm_1.getConnection().getRepository(questionnaire_entity_1.QuestionnaireEntity).createQueryBuilder("questionnaire")
                    .leftJoinAndSelect("questionnaire.domain", "domain")
                    .leftJoinAndSelect("questionnaire.subdomain", "subdomain")
                    .where("questionnaire.id = :id", { id: answer.questionid })
                    .getOne();
                return { answer: answer, questionnaire: selectedQuestionnaire };
            })));
        });
    }
};
SessionService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('SessionRepository')),
    __param(1, common_1.Inject('AnswerRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map