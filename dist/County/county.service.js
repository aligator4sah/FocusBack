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
const county_entity_1 = require("./county.entity");
let CountyService = class CountyService {
    constructor(countyRepository) {
        this.countyRepository = countyRepository;
    }
    getAllCounty() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countyRepository.find();
        });
    }
    getCounty(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countyRepository.findOneById(id);
        });
    }
    addCounty(county) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedCounty = yield this.countyRepository.save(county);
            yield typeorm_1.getConnection().createQueryBuilder().relation(county_entity_1.CountyEntity, "state").of(selectedCounty.id).set(county.state);
            return selectedCounty;
        });
    }
    updateCounty(id, newCounty) {
        return __awaiter(this, void 0, void 0, function* () {
            const county = yield this.countyRepository.findOneById(id);
            if (!county) {
                console.log('county does not exist');
            }
            yield this.countyRepository.updateById(id, newCounty);
            return this.countyRepository.findOneById(id);
        });
    }
    deleteCounty(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countyRepository.deleteById(id);
            const county = yield this.countyRepository.findOneById(id);
            if (county) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getCountyByState(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedCounty = yield typeorm_1.getRepository(county_entity_1.CountyEntity)
                .createQueryBuilder("county")
                .leftJoinAndSelect("county.state", "state")
                .where("state.id = :name", { name: id })
                .getMany();
            return selectedCounty;
        });
    }
};
CountyService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('CountyRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CountyService);
exports.CountyService = CountyService;
//# sourceMappingURL=county.service.js.map