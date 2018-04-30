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
const communityMember_entity_1 = require("../CommunityMembers/communityMember.entity");
let BhcoEntity = class BhcoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BhcoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "midname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "county", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BhcoEntity.prototype, "community", void 0);
__decorate([
    typeorm_1.OneToMany(type => communityMember_entity_1.CommunityMemberEntity, communityMember => communityMember.bhco, {}),
    __metadata("design:type", Array)
], BhcoEntity.prototype, "communityMember", void 0);
BhcoEntity = __decorate([
    typeorm_1.Entity()
], BhcoEntity);
exports.BhcoEntity = BhcoEntity;
//# sourceMappingURL=bhco.entity.js.map