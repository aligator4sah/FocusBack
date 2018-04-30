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
const community_entity_1 = require("../Community/community.entity");
const family_entity_1 = require("../Family/family.entity");
let BlockEntity = class BlockEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BlockEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BlockEntity.prototype, "block", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BlockEntity.prototype, "startstreet", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BlockEntity.prototype, "endstreet", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BlockEntity.prototype, "zipcode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => community_entity_1.CommunityEntity, community => community.block),
    __metadata("design:type", community_entity_1.CommunityEntity)
], BlockEntity.prototype, "community", void 0);
__decorate([
    typeorm_1.OneToMany(type => family_entity_1.FamilyEntity, family => family.block),
    __metadata("design:type", Array)
], BlockEntity.prototype, "family", void 0);
BlockEntity = __decorate([
    typeorm_1.Entity()
], BlockEntity);
exports.BlockEntity = BlockEntity;
//# sourceMappingURL=block.entity.js.map