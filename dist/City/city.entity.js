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
const county_entity_1 = require("../County/county.entity");
const community_entity_1 = require("../Community/community.entity");
let CityEntity = class CityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CityEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.ManyToOne(type => county_entity_1.CountyEntity, county => county.city),
    __metadata("design:type", county_entity_1.CountyEntity)
], CityEntity.prototype, "county", void 0);
__decorate([
    typeorm_1.OneToMany(type => community_entity_1.CommunityEntity, community => community.city),
    __metadata("design:type", Array)
], CityEntity.prototype, "community", void 0);
CityEntity = __decorate([
    typeorm_1.Entity()
], CityEntity);
exports.CityEntity = CityEntity;
//# sourceMappingURL=city.entity.js.map