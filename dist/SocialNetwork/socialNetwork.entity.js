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
const relationship_entity_1 = require("../Relationship/relationship.entity");
let SocialNetworkEntity = class SocialNetworkEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SocialNetworkEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Object)
], SocialNetworkEntity.prototype, "sessionId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SocialNetworkEntity.prototype, "questionId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SocialNetworkEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SocialNetworkEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SocialNetworkEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SocialNetworkEntity.prototype, "midName", void 0);
__decorate([
    typeorm_1.Column('double precision'),
    __metadata("design:type", Number)
], SocialNetworkEntity.prototype, "weight", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SocialNetworkEntity.prototype, "block", void 0);
__decorate([
    typeorm_1.OneToOne(type => relationship_entity_1.RelationshipEntity, relationship => relationship.socialNetwork),
    typeorm_1.JoinColumn(),
    __metadata("design:type", relationship_entity_1.RelationshipEntity)
], SocialNetworkEntity.prototype, "relationship", void 0);
SocialNetworkEntity = __decorate([
    typeorm_1.Entity()
], SocialNetworkEntity);
exports.SocialNetworkEntity = SocialNetworkEntity;
//# sourceMappingURL=socialNetwork.entity.js.map