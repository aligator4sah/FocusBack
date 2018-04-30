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
const family_entity_1 = require("./family.entity");
let FamilyService = class FamilyService {
    constructor(familyRepository) {
        this.familyRepository = familyRepository;
    }
    getAllFamily() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.familyRepository.find();
        });
    }
    getFamily(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.familyRepository.findOneById(id);
        });
    }
    addFamily(InFamily) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.familyRepository.save(InFamily);
            const requestFamily = yield this.familyRepository.findOne({ family: InFamily.family });
            yield typeorm_1.getConnection().createQueryBuilder().relation(family_entity_1.FamilyEntity, "block").of(requestFamily.id).set(InFamily.block);
            return yield this.familyRepository.findOneById(requestFamily.id);
        });
    }
    updateFamily(id, newFamily) {
        return __awaiter(this, void 0, void 0, function* () {
            const family = yield this.familyRepository.findOneById(id);
            if (!family) {
                console.log('family does not exist');
            }
            yield this.familyRepository.updateById(id, newFamily);
            return this.familyRepository.findOneById(id);
        });
    }
    deleteFamily(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.familyRepository.deleteById(id);
            const family = yield this.familyRepository.findOneById(id);
            if (family) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getFamilyByBlock(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedFamily = typeorm_1.getRepository(family_entity_1.FamilyEntity)
                .createQueryBuilder("family")
                .leftJoinAndSelect("family.block", "block")
                .where("block.id = :name", { name: id })
                .getMany();
            return selectedFamily;
        });
    }
};
FamilyService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('FamilyRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FamilyService);
exports.FamilyService = FamilyService;
//# sourceMappingURL=family.service.js.map