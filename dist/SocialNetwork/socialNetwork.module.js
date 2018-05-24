"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("../Database/database.module");
const socialNetwork_service_1 = require("./socialNetwork.service");
const socialNetwork_providers_1 = require("./socialNetwork.providers");
const socialNetwork_controller_1 = require("./socialNetwork.controller");
const common_1 = require("@nestjs/common");
let SocialNetworkModule = class SocialNetworkModule {
};
SocialNetworkModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [
            socialNetwork_controller_1.SocialNetworkController
        ],
        components: [
            socialNetwork_service_1.SocialNetworkService, socialNetwork_providers_1.socialNetworkProvider
        ]
    })
], SocialNetworkModule);
exports.SocialNetworkModule = SocialNetworkModule;
//# sourceMappingURL=socialNetwork.module.js.map