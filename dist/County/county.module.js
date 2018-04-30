"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("../Database/database.module");
const common_1 = require("@nestjs/common");
const county_providers_1 = require("./county.providers");
const county_service_1 = require("./county.service");
const county_controller_1 = require("./county.controller");
let CountyModule = class CountyModule {
};
CountyModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule
        ],
        components: [
            county_providers_1.countyProvider,
            county_service_1.CountyService
        ],
        controllers: [
            county_controller_1.CountyController
        ]
    })
], CountyModule);
exports.CountyModule = CountyModule;
//# sourceMappingURL=county.module.js.map