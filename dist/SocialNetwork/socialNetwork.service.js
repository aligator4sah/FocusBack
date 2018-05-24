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
const socialNetwork_entity_1 = require("./socialNetwork.entity");
const typeorm_1 = require("typeorm");
const relationship_entity_1 = require("../Relationship/relationship.entity");
let SocialNetworkService = class SocialNetworkService {
    constructor(socialNetworkRepository) {
        this.socialNetworkRepository = socialNetworkRepository;
    }
    addSocialNetwork(socialNetworks) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentSocialNetwork = yield this.socialNetworkRepository.find();
            yield Promise.all(socialNetworks.map((item) => __awaiter(this, void 0, void 0, function* () {
                const selectedRelationship = yield typeorm_1.getConnection().getRepository(relationship_entity_1.RelationshipEntity).createQueryBuilder("relationship")
                    .where("relationship.relationship = :re", { re: item.relationship }).getOne();
                const selectedSocialNetwork = yield this.socialNetworkRepository.save(item);
                yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .relation(socialNetwork_entity_1.SocialNetworkEntity, "relationship")
                    .of(selectedSocialNetwork.id)
                    .set(selectedRelationship.id);
                return { socialNetwork: selectedSocialNetwork };
            }))).then((items) => {
                items.forEach(item => {
                    currentSocialNetwork.push(item.socialNetwork);
                });
            });
            return currentSocialNetwork;
        });
    }
    findAllSocialNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.socialNetworkRepository.find();
        });
    }
    findSocialNetworkByUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.socialNetworkRepository.find({ where: { userId: userID } });
        });
    }
};
SocialNetworkService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('SocialNetworkRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SocialNetworkService);
exports.SocialNetworkService = SocialNetworkService;
//# sourceMappingURL=socialNetwork.service.js.map