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
const answer_controller_1 = require("./answer.controller");
const answer_service_1 = require("./answer.service");
const answer_providers_1 = require("./answer.providers");
let AnswerModule = class AnswerModule {
};
AnswerModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule
        ],
        components: [
            answer_service_1.AnswerService,
            answer_providers_1.answerProvider
        ],
        controllers: [
            answer_controller_1.AnswerController
        ]
    })
], AnswerModule);
exports.AnswerModule = AnswerModule;
//# sourceMappingURL=answer.module.js.map