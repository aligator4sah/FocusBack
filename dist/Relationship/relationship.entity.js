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
const socialNetwork_entity_1 = require("../SocialNetwork/socialNetwork.entity");
let RelationshipEntity = class RelationshipEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RelationshipEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RelationshipEntity.prototype, "relationship", void 0);
__decorate([
    typeorm_1.OneToOne(type => socialNetwork_entity_1.SocialNetworkEntity, socialNetwork => socialNetwork.relationship),
    __metadata("design:type", socialNetwork_entity_1.SocialNetworkEntity)
], RelationshipEntity.prototype, "socialNetwork", void 0);
RelationshipEntity = __decorate([
    typeorm_1.Entity()
], RelationshipEntity);
exports.RelationshipEntity = RelationshipEntity;
//# sourceMappingURL=relationship.entity.js.map