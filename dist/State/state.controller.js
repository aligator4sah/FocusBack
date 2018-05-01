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
const create_State_dto_1 = require("./DTO/create-State.dto");
const state_service_1 = require("./state.service");
const common_2 = require("@nestjs/common");
const roles_guard_1 = require("../Shared/Guards/roles.guard");
const roles_decorator_1 = require("../shared/Guards/roles.decorator");
let StateController = class StateController {
    constructor(stateService) {
        this.stateService = stateService;
    }
    getAllState() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateService.getAllState();
            return msg;
        });
    }
    getState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateService.getState(params.id);
            return msg;
        });
    }
    addState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateService.addState(state);
            return msg;
        });
    }
    updateState(params, newState) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateService.updateState(params.id, newState);
            return msg;
        });
    }
    deleteState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.stateService.deleteState(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    roles_decorator_1.Roles('systemAdmin', 'stateAdmin', 'communityAdmin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StateController.prototype, "getAllState", null);
__decorate([
    common_1.Get(':id'),
    roles_decorator_1.Roles('systemAdmin', 'stateAdmin', 'communityAdmin'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "getState", null);
__decorate([
    common_1.Post(),
    roles_decorator_1.Roles('systemAdmin', 'stateAdmin', 'communityAdmin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_State_dto_1.CreateStateDto]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "addState", null);
__decorate([
    common_1.Patch(':id'),
    roles_decorator_1.Roles('systemAdmin', 'stateAdmin', 'communityAdmin'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_State_dto_1.CreateStateDto]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "updateState", null);
__decorate([
    common_1.Delete(':id'),
    roles_decorator_1.Roles('systemAdmin', 'stateAdmin', 'communityAdmin'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "deleteState", null);
StateController = __decorate([
    common_1.Controller('state'),
    common_2.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [state_service_1.StateService])
], StateController);
exports.StateController = StateController;
//# sourceMappingURL=state.controller.js.map