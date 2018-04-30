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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../City/city.entity");
const block_entity_1 = require("../Block/block.entity");
const communityMember_entity_1 = require("../CommunityMembers/communityMember.entity");
let CommunityEntity = class CommunityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommunityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityEntity.prototype, "community", void 0);
__decorate([
    typeorm_1.ManyToOne(type => city_entity_1.CityEntity, city => city.community),
    __metadata("design:type", city_entity_1.CityEntity)
], CommunityEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.OneToMany(type => block_entity_1.BlockEntity, block => block.community),
    __metadata("design:type", Array)
], CommunityEntity.prototype, "block", void 0);
__decorate([
    typeorm_1.OneToMany(type => communityMember_entity_1.CommunityMemberEntity, communityMember => communityMember.community),
    __metadata("design:type", Array)
], CommunityEntity.prototype, "communitymember", void 0);
CommunityEntity = __decorate([
    typeorm_1.Entity()
], CommunityEntity);
exports.CommunityEntity = CommunityEntity;
//# sourceMappingURL=community.entity.js.map