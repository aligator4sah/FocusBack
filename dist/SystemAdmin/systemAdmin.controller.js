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
const create_SystemAdmin_dto_1 = require("./DTO/create-SystemAdmin.dto");
const systemAdmin_service_1 = require("./systemAdmin.service");
let SystemAdminController = class SystemAdminController {
    constructor(systemAdminService) {
        this.systemAdminService = systemAdminService;
    }
    getAllSystemAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.getAllSystemAdmin();
            return msg;
        });
    }
    addSystemAdmin(systemAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.addSystemAdmin(systemAdmin);
            return msg;
        });
    }
    getSystemAdmin(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.getSystemAdmin(params.id);
            return msg;
        });
    }
    updateSystemAdmin(newSystemAdmin, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.updateSystemAdmin(params.id, newSystemAdmin);
            return msg;
        });
    }
    deleteSystemAdmin(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.deleteSystemAdmin(params.id);
            return msg;
        });
    }
    countCommunityMemberInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberInSystem();
            return msg;
        });
    }
    countCommunityMemberByStateInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberGroupByState();
            return msg;
        });
    }
    countCommunityMemberByCommunityInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberGroupByCommunity();
            return msg;
        });
    }
    countCommunityMemberByCityInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberGroupByCity();
            return msg;
        });
    }
    countCommunityMemberByGenderInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberByGenderInSystem();
            return msg;
        });
    }
    countCommunityMemberByRaceInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberByRaceInSystem();
            return msg;
        });
    }
    countCommunityMemberByMarryInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberByMarryInSystem();
            return msg;
        });
    }
    countCommunityMemberByEducationInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberByEducationInSystem();
            return msg;
        });
    }
    countCommunityMemberByEmploymentsInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberByEmploymentsInSystem();
            return msg;
        });
    }
    countCommunityMemberByAgeInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countCommunityMemberByAgeInSystem();
            return msg;
        });
    }
    countBhcoInSystem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.systemAdminService.countBhcoInSystem();
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "getAllSystemAdmin", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_SystemAdmin_dto_1.CreateSystemAdminDto]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "addSystemAdmin", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "getSystemAdmin", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_SystemAdmin_dto_1.CreateSystemAdminDto, Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "updateSystemAdmin", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "deleteSystemAdmin", null);
__decorate([
    common_1.Get('communityMemberInSystem/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByState/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByStateInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByCommunity/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByCommunityInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByCity/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByCityInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByGender/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByGenderInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByRace/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByRaceInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByMarry/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByMarryInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByEducation/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByEducationInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByEmployments/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByEmploymentsInSystem", null);
__decorate([
    common_1.Get('communityMemberGroupByAge/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countCommunityMemberByAgeInSystem", null);
__decorate([
    common_1.Get('bhcoInSystem/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemAdminController.prototype, "countBhcoInSystem", null);
SystemAdminController = __decorate([
    common_1.Controller('systemAdmin'),
    __metadata("design:paramtypes", [systemAdmin_service_1.SystemAdminService])
], SystemAdminController);
exports.SystemAdminController = SystemAdminController;
//# sourceMappingURL=systemAdmin.controller.js.map