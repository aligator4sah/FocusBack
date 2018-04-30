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
let CommunityAdminEntity = class CommunityAdminEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommunityAdminEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "midname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "county", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommunityAdminEntity.prototype, "community", void 0);
CommunityAdminEntity = __decorate([
    typeorm_1.Entity()
], CommunityAdminEntity);
exports.CommunityAdminEntity = CommunityAdminEntity;
//# sourceMappingURL=communityAdmin.entity.js.map