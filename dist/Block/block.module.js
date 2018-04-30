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
const block_providers_1 = require("./block.providers");
const block_controller_1 = require("./block.controller");
const block_service_1 = require("./block.service");
let BlockModule = class BlockModule {
};
BlockModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule
        ],
        controllers: [
            block_controller_1.BlockController
        ],
        components: [
            block_providers_1.blockProvider,
            block_service_1.BlockService
        ]
    })
], BlockModule);
exports.BlockModule = BlockModule;
//# sourceMappingURL=block.module.js.map