"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const communityMember_controller_1 = require("./communityMember.controller");
const communityMember_service_1 = require("./communityMember.service");
const communityMember_providers_1 = require("./communityMember.providers");
const database_module_1 = require("../Database/database.module");
let CommunityMemberModule = class CommunityMemberModule {
};
CommunityMemberModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [
            communityMember_controller_1.CommunityMemberController
        ],
        components: [
            communityMember_providers_1.communityMemberProvider,
            communityMember_service_1.CommunityMemberService
        ],
    })
], CommunityMemberModule);
exports.CommunityMemberModule = CommunityMemberModule;
//# sourceMappingURL=communityMember.module.js.map