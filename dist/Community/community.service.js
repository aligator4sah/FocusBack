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
const community_entity_1 = require("./community.entity");
let CommunityService = class CommunityService {
    constructor(communityRepository) {
        this.communityRepository = communityRepository;
    }
    getAllCommunity() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.communityRepository.find();
        });
    }
    getCommunity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.communityRepository.findOneById(id);
        });
    }
    addCommunity(InCommunity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.communityRepository.save(InCommunity);
            const requestCommunity = yield this.communityRepository.findOne({ community: InCommunity.community });
            yield typeorm_1.getConnection().createQueryBuilder().relation(community_entity_1.CommunityEntity, "city").of(requestCommunity.id).set(InCommunity.city);
            return yield this.communityRepository.findOneById(requestCommunity.id);
        });
    }
    updateCommunity(id, newCommunity) {
        return __awaiter(this, void 0, void 0, function* () {
            const community = yield this.communityRepository.findOneById(id);
            if (!community) {
                console.log('community does not exist');
            }
            yield this.communityRepository.updateById(id, newCommunity);
            return yield this.communityRepository.findOneById(id);
        });
    }
    deleteCommunity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.communityRepository.deleteById(id);
            const community = yield this.communityRepository.findOneById(id);
            if (community) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getCommunityByCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedCommunity = yield typeorm_1.getRepository(community_entity_1.CommunityEntity)
                .createQueryBuilder("community")
                .leftJoinAndSelect("community.city", "city")
                .where("city.id = :name", { name: id })
                .getMany();
            return selectedCommunity;
        });
    }
};
CommunityService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('CommunityRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommunityService);
exports.CommunityService = CommunityService;
//# sourceMappingURL=community.service.js.map