"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_entity_1 = require("./block.entity");
exports.blockProvider = {
    provide: 'BlockRepository',
    useFactory: (connection) => connection.getRepository(block_entity_1.BlockEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=block.providers.js.map