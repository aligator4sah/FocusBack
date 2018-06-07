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
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const state_entity_1 = require("../State/state.entity");
const communityMember_entity_1 = require("../CommunityMembers/communityMember.entity");
const bhco_entity_1 = require("../Bhco/bhco.entity");
let StateAdminService = class StateAdminService {
    constructor(stateAdminRepository) {
        this.stateAdminRepository = stateAdminRepository;
    }
    getAllStateAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.stateAdminRepository.find();
        });
    }
    getStateAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedStateAdmin = yield this.stateAdminRepository.findOneById(id);
            selectedStateAdmin["role"] = "stateAdmin";
            return selectedStateAdmin;
        });
    }
    addStateAdmin(stateAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.stateAdminRepository.save(stateAdmin);
        });
    }
    updateStateAdmin(id, newStateAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateAdmin = yield this.stateAdminRepository.findOneById(id);
            if (!stateAdmin) {
                console.log('state admin does not exist');
            }
            else {
                yield this.stateAdminRepository.updateById(id, newStateAdmin);
                return this.stateAdminRepository.findOneById(id);
            }
        });
    }
    deleteStateAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stateAdminRepository.deleteById(id);
            const stateAdmin = yield this.stateAdminRepository.findOneById(id);
            if (!stateAdmin) {
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
    countCommunityMemberInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state }).getCount();
        });
    }
    countCommunityMemberGroupByCountyInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.county AS county")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.county")
                .getRawMany();
        });
    }
    countCommunityMemberGroupByCityInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.city AS city")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.city")
                .getRawMany();
        });
    }
    countCommunityMemberGroupByCommunityInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.community AS community")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.community")
                .getRawMany();
        });
    }
    countBhcoGroupInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(bhco_entity_1.BhcoEntity).createQueryBuilder("bhco").
                where('bhco.state = :state', { state: state }).getCount();
        });
    }
    countCommunityMemberByGenderInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.gender AS gender")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.gender")
                .getRawMany();
        });
    }
    countCommunityMemberByRaceInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.race AS race")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.race")
                .getRawMany();
        });
    }
    countCommunityMemberByMarryInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.marry AS marry")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.marry")
                .getRawMany();
        });
    }
    countCommunityMemberByEducationInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.education AS education")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.education")
                .getRawMany();
        });
    }
    countCommunityMemberByEmploymentsInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .select("communityMember.employments AS employments")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.employments")
                .getRawMany();
        });
    }
    countCommunityMemberByAgeInCurrentState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedState = yield typeorm_1.getConnection().getRepository(state_entity_1.StateEntity).createQueryBuilder("state")
                .where("state.id = :id", { id: stateId }).getOne();
            const state = selectedState.state;
            const selectedCommunityMember = yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .where("communityMember.state = :state", { state: state })
                .getMany();
            let year = new Date().getFullYear();
            console.log(year);
            let A = 0;
            let B = 0;
            let C = 0;
            let D = 0;
            let E = 0;
            let F = 0;
            selectedCommunityMember.forEach((item) => {
                let gap = year - Number(item.date.substring(0, 4));
                if (gap > 65) {
                    F++;
                }
                else if (gap > 50) {
                    E++;
                }
                else if (gap > 40) {
                    D++;
                }
                else if (gap > 30) {
                    C++;
                }
                else if (gap > 18) {
                    B++;
                }
                else {
                    A++;
                }
            });
            return [{ type: "0-18", count: A }, { type: "18-30", count: B }, { type: "30-40", count: C }, { type: "40-50", count: D }, { type: "50-65", count: E }, { type: "65+", count: F }];
        });
    }
};
StateAdminService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('StateAdminRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StateAdminService);
exports.StateAdminService = StateAdminService;
//# sourceMappingURL=stateAdmin.service.js.map