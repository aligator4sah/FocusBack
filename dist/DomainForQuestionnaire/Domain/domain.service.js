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
const domain_entity_1 = require("./domain.entity");
const subDomain_entity_1 = require("../SubDomain/subDomain.entity");
let DomainService = class DomainService {
    constructor(domainRepository) {
        this.domainRepository = domainRepository;
    }
    getAllDomain() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.domainRepository.find();
        });
    }
    getDomain(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.domainRepository.findOneById(id);
        });
    }
    addDomain(domain) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.domainRepository.save(domain);
        });
    }
    updateDomain(id, newDomain) {
        return __awaiter(this, void 0, void 0, function* () {
            const domain = yield this.domainRepository.findOneById(id);
            if (!domain) {
                console.log("domain does not exist");
            }
            yield this.domainRepository.updateById(id, newDomain);
            return yield this.domainRepository.findOneById(id);
        });
    }
    deleteDomain(domainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedDomain = yield typeorm_1.getRepository(domain_entity_1.DomainEntity).createQueryBuilder('domain')
                .leftJoinAndSelect("domain.subdomain", "subdomain")
                .where("domain.id = :id", { id: domainId })
                .getOne();
            console.log(selectedDomain.subdomain);
            for (let subDomain of selectedDomain.subdomain) {
                yield typeorm_1.getConnection().createQueryBuilder().delete().from(subDomain_entity_1.SubDomainEntity)
                    .where("id = :id", { id: subDomain.id }).execute();
            }
            yield this.domainRepository.deleteById(domainId);
            const domain = yield this.domainRepository.findOneById(domainId);
            if (domain) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
};
DomainService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('DomainRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DomainService);
exports.DomainService = DomainService;
//# sourceMappingURL=domain.service.js.map