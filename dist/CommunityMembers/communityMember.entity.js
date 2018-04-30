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
const bhco_entity_1 = require("../Bhco/bhco.entity");
const community_entity_1 = require("../Community/community.entity");
let CommunityMemberEntity = class CommunityMemberEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommunityMemberEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "midname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "addressone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "addresstwo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "family", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "block", void 0);
__decorate([
    typeorm_1.ManyToOne(type => community_entity_1.CommunityEntity, community => community.id),
    __metadata("design:type", community_entity_1.CommunityEntity)
], CommunityMemberEntity.prototype, "community", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "county", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "race", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "marry", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "education", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityMemberEntity.prototype, "employments", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], CommunityMemberEntity.prototype, "assigned", void 0);
__decorate([
    typeorm_1.ManyToOne(type => bhco_entity_1.BhcoEntity, bhco => bhco.communityMember),
    __metadata("design:type", bhco_entity_1.BhcoEntity)
], CommunityMemberEntity.prototype, "bhco", void 0);
CommunityMemberEntity = __decorate([
    typeorm_1.Entity()
], CommunityMemberEntity);
exports.CommunityMemberEntity = CommunityMemberEntity;
//# sourceMappingURL=communityMember.entity.js.map