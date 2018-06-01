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
const create_Bhco_dto_1 = require("./DTO/create-Bhco.dto");
const bhco_service_1 = require("./bhco.service");
let BhcoController = class BhcoController {
    constructor(bhcoService) {
        this.bhcoService = bhcoService;
    }
    getAllBhco() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.getAllBhco();
            return msg;
        });
    }
    getAllBhcoByCommunity(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.getAllBhcoByCommunity(params.id);
            return msg;
        });
    }
    getAllBhcoByState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.getAllBhcoByState(params.id);
            return msg;
        });
    }
    addBhco(bhco) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.addBhco(bhco);
            return msg;
        });
    }
    getBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.getBhco(params.id);
            return msg;
        });
    }
    updateBhco(params, newBhco) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.updateBhco(params.id, newBhco);
            return msg;
        });
    }
    deleteBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.deleteBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberInCurrentBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberByGenderInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberByGenderInCurrentBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberByRaceInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberByRaceInCurrentBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberByMarryInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberByMarryInCurrentBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberByEducationInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberByEducationInCurrentBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberByEmploymentsInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberByEmploymentsInCurrentBhco(params.id);
            return msg;
        });
    }
    countCommunityMemberByAgeDistributionInBhco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.bhcoService.countCommunityMemberByAgeInCurrentBhco(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get('bhco'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "getAllBhco", null);
__decorate([
    common_1.Get('Bhco/Community/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "getAllBhcoByCommunity", null);
__decorate([
    common_1.Get('Bhco/State/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "getAllBhcoByState", null);
__decorate([
    common_1.Post('bhco'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Bhco_dto_1.CreateBhcoDto]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "addBhco", null);
__decorate([
    common_1.Get('bhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "getBhco", null);
__decorate([
    common_1.Patch('bhco/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_Bhco_dto_1.CreateBhcoDto]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "updateBhco", null);
__decorate([
    common_1.Delete('bhco:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "deleteBhco", null);
__decorate([
    common_1.Get('communityMemberInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberInBhco", null);
__decorate([
    common_1.Get('communityMemberByGenderInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberByGenderInBhco", null);
__decorate([
    common_1.Get('communityMemberByRaceInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberByRaceInBhco", null);
__decorate([
    common_1.Get('communityMemberByMarryInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberByMarryInBhco", null);
__decorate([
    common_1.Get('communityMemberByEducationInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberByEducationInBhco", null);
__decorate([
    common_1.Get('communityMemberByEmploymentsInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberByEmploymentsInBhco", null);
__decorate([
    common_1.Get('communityMemberByAgeDistributionInBhco/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BhcoController.prototype, "countCommunityMemberByAgeDistributionInBhco", null);
BhcoController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [bhco_service_1.BhcoService])
], BhcoController);
exports.BhcoController = BhcoController;
//# sourceMappingURL=bhco.controller.js.map