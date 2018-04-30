"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../Database/database.module");
const userDemographic_controller_1 = require("./userDemographic.controller");
const userDemographic_service_1 = require("./userDemographic.service");
const userDemographic_providers_1 = require("./userDemographic.providers");
let UserDemographicModule = class UserDemographicModule {
};
UserDemographicModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        components: [
            userDemographic_providers_1.userDemographicProvider,
            userDemographic_service_1.UserDemographicService
        ],
        controllers: [
            userDemographic_controller_1.UserDemographicController
        ]
    })
], UserDemographicModule);
exports.UserDemographicModule = UserDemographicModule;
//# sourceMappingURL=userDemographic.module.js.map