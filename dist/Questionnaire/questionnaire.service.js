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
const questionnaire_entity_1 = require("./questionnaire.entity");
const subDomain_entity_1 = require("../DomainForQuestionnaire/SubDomain/subDomain.entity");
const domain_entity_1 = require("../DomainForQuestionnaire/Domain/domain.entity");
let QuestionnaireService = class QuestionnaireService {
    constructor(questionnaireRepository) {
        this.questionnaireRepository = questionnaireRepository;
    }
    getAllQuestionnaire() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.questionnaireRepository.find();
        });
    }
    getQuestionsBySubdomain(subDomainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSubDomain = yield typeorm_1.getConnection()
                .getRepository(subDomain_entity_1.SubDomainEntity)
                .createQueryBuilder("subDomain")
                .leftJoinAndSelect("subDomain.questionnaire", "questionnaire")
                .where("subDomain.id = :id", { id: subDomainId })
                .getOne();
            return selectedSubDomain.questionnaire;
        });
    }
    getQuestionnaire(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.questionnaireRepository.findOneById(id);
        });
    }
    addQuestionnaire(questionnaire) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedQuestionnaire = yield this.questionnaireRepository.save(questionnaire);
            yield typeorm_1.getConnection().createQueryBuilder().relation(questionnaire_entity_1.QuestionnaireEntity, "domain").of(selectedQuestionnaire.id).set(questionnaire.domain);
            yield typeorm_1.getConnection().createQueryBuilder().relation(questionnaire_entity_1.QuestionnaireEntity, "subdomain")
                .of(selectedQuestionnaire.id).set(questionnaire.subdomain);
            return yield this.questionnaireRepository.findOneById(selectedQuestionnaire.id);
        });
    }
    updateQuestionnaire(id, newQuestionnaire) {
        return __awaiter(this, void 0, void 0, function* () {
            const questionnaire = yield this.questionnaireRepository.findOneById(id);
            if (!questionnaire) {
                console.log("questionnaire does not exist");
            }
            yield this.questionnaireRepository.updateById(id, newQuestionnaire);
            return yield this.questionnaireRepository.findOneById(id);
        });
    }
    deleteQuestionnaire(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.questionnaireRepository.deleteById(id);
            const questionnaire = this.questionnaireRepository.findOneById(id);
            if (questionnaire) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getQuestionnaireByDomain(domainId) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultSubDomains = [];
            const selectedDomain = yield typeorm_1.getConnection().getRepository(domain_entity_1.DomainEntity)
                .createQueryBuilder("domain").leftJoinAndSelect("domain.subdomain", "subdomain")
                .where("domain.id = :id", { id: domainId })
                .getOne();
            for (let subDomain of yield selectedDomain.subdomain) {
                const subDomainWithQ = yield typeorm_1.getConnection()
                    .getRepository(subDomain_entity_1.SubDomainEntity)
                    .createQueryBuilder("subDomain")
                    .leftJoinAndSelect("subDomain.questionnaire", "questionnaire")
                    .orderBy("questionnaire.id", "ASC")
                    .where("subDomain.id = :id", { id: subDomain.id })
                    .getOne();
                yield resultSubDomains.push(subDomainWithQ);
            }
            return yield { selectedDomain, resultSubDomains };
        });
    }
};
QuestionnaireService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('QuestionnaireRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], QuestionnaireService);
exports.QuestionnaireService = QuestionnaireService;
//# sourceMappingURL=questionnaire.service.js.map