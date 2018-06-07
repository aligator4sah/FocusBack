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
const create_StateAdmin_dto_1 = require("./DTO/create-StateAdmin.dto");
const stateAdmin_service_1 = require("./stateAdmin.service");
let StateAdminController = class StateAdminController {
    constructor(stateAdminService) {
        this.stateAdminService = stateAdminService;
    }
    getAllStateAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.getAllStateAdmin();
            return msg;
        });
    }
    getStateAdmin(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.getStateAdmin(params.id);
            return msg;
        });
    }
    addStateAdmin(stateAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.addStateAdmin(stateAdmin);
        });
    }
    updateStateAdmin(params, newStateAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.updateStateAdmin(params.id, newStateAdmin);
            return msg;
        });
    }
    deleteStateAdmin(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.deleteStateAdmin(params.id);
            return msg;
        });
    }
    countCommunityMemberInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberInCurrentState(params.id);
            return msg;
        });
    }
    countBhcoInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countBhcoGroupInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByCityInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberGroupByCityInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByCountyInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberGroupByCountyInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByCommunityInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberGroupByCommunityInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByGenderInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberByGenderInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByRaceInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberByRaceInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByMarryInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberByMarryInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByEducationInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberByEducationInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByEmploymentsInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberByEmploymentsInCurrentState(params.id);
            return msg;
        });
    }
    countCommunityByAgeDistributionInState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateAdminService.countCommunityMemberByAgeInCurrentState(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "getAllStateAdmin", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "getStateAdmin", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_StateAdmin_dto_1.CreateStateAdminDto]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "addStateAdmin", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_StateAdmin_dto_1.CreateStateAdminDto]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "updateStateAdmin", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "deleteStateAdmin", null);
__decorate([
    common_1.Get('communityMemberInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityMemberInState", null);
__decorate([
    common_1.Get('bhcoInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countBhcoInState", null);
__decorate([
    common_1.Get('communityMemberByCityInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByCityInState", null);
__decorate([
    common_1.Get('communityMemberByCountyInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByCountyInState", null);
__decorate([
    common_1.Get('communityMemberByCommunityInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByCommunityInState", null);
__decorate([
    common_1.Get('communityMemberByGenderInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByGenderInState", null);
__decorate([
    common_1.Get('communityMemberByRaceInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByRaceInState", null);
__decorate([
    common_1.Get('communityMemberByMarryInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByMarryInState", null);
__decorate([
    common_1.Get('communityMemberByEducationInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByEducationInState", null);
__decorate([
    common_1.Get('communityMemberByEmploymentsInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByEmploymentsInState", null);
__decorate([
    common_1.Get('communityMemberByAgeDistributionInState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateAdminController.prototype, "countCommunityByAgeDistributionInState", null);
StateAdminController = __decorate([
    common_1.Controller('stateAdmin'),
    __metadata("design:paramtypes", [stateAdmin_service_1.StateAdminService])
], StateAdminController);
exports.StateAdminController = StateAdminController;
//# sourceMappingURL=stateAdmin.controller.js.map