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
const communityMember_entity_1 = require("../CommunityMembers/communityMember.entity");
let SystemAdminService = class SystemAdminService {
    constructor(systemAdminRepository) {
        this.systemAdminRepository = systemAdminRepository;
    }
    getAllSystemAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.systemAdminRepository.find();
        });
    }
    getSystemAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.systemAdminRepository.findOneById(id);
        });
    }
    addSystemAdmin(systemAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.systemAdminRepository.save(systemAdmin);
        });
    }
    updateSystemAdmin(id, newSystemAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const systemAdmin = yield this.systemAdminRepository.findOneById(id);
            if (!systemAdmin) {
                console.log("system admin does not exist");
            }
            else {
                yield this.systemAdminRepository.updateById(id, newSystemAdmin);
                return yield this.systemAdminRepository.findOneById(id);
            }
        });
    }
    deleteSystemAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.systemAdminRepository.deleteById(id);
            const systemAdmin = yield this.systemAdminRepository.findOneById(id);
            if (!systemAdmin) {
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
    countCommunityMemberInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .getCount();
        });
    }
    countCommunityMemberGroupByState() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .select("communityMember.state AS state")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.state")
                .getRawMany();
        });
    }
    countCommunityMemberByGenderInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .select("communityMember.gender AS gender")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.gender")
                .getRawMany();
        });
    }
    countCommunityMemberByRaceInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .select("communityMember.race AS race")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.gender")
                .getRawMany();
        });
    }
    countCommunityMemberByMarryInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .select("communityMember.marry AS marry")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.marry")
                .getRawMany();
        });
    }
    countCommunityMemberByEducationInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .select("communityMember.education AS education")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.education")
                .getRawMany();
        });
    }
    countCommunityMemberByEmploymentsInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .select("communityMember.employments AS employments")
                .addSelect("COUNT(*) AS count")
                .groupBy("communityMember.employments")
                .getRawMany();
        });
    }
    countCommunityMemberByAgeInSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedCommunityMember = yield typeorm_1.getConnection().getRepository(communityMember_entity_1.CommunityMemberEntity).createQueryBuilder("communityMember")
                .getMany();
            let year = new Date().getFullYear();
            console.log(year);
            let teenager = 0;
            let adult = 0;
            let senior = 0;
            selectedCommunityMember.forEach((item) => {
                let gap = year - Number(item.date.substring(0, 4));
                if (gap > 50) {
                    senior++;
                }
                else if (gap > 20) {
                    adult++;
                }
                else {
                    teenager++;
                }
            });
            return [{ type: "teenager", count: teenager }, { type: "adult", count: adult }, { type: "senior", count: senior }];
        });
    }
};
SystemAdminService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('SystemAdminRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SystemAdminService);
exports.SystemAdminService = SystemAdminService;
//# sourceMappingURL=systemAdmin.service.js.map