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
const city_entity_1 = require("./city.entity");
let CityService = class CityService {
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    getAllCity() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityRepository.find();
        });
    }
    getCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityRepository.findOneById(id);
        });
    }
    addCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedCity = yield this.cityRepository.save(city);
            yield typeorm_1.getConnection().createQueryBuilder().relation(city_entity_1.CityEntity, "county").of(selectedCity.id).set(city.county);
            return selectedCity;
        });
    }
    updateCity(id, newCity) {
        return __awaiter(this, void 0, void 0, function* () {
            const city = yield this.cityRepository.findOneById(id);
            if (!city) {
                console.log('city does not exist');
            }
            yield this.cityRepository.updateById(id, newCity);
            return this.cityRepository.findOneById(id);
        });
    }
    deleteCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cityRepository.deleteById(id);
            const city = yield this.cityRepository.findOneById(id);
            if (id) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getCityByCounty(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedCity = yield typeorm_1.getRepository(city_entity_1.CityEntity)
                .createQueryBuilder("city")
                .leftJoinAndSelect("city.county", "county")
                .where("county.id = :name", { name: id })
                .getMany();
            return selectedCity;
        });
    }
};
CityService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('CityRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map