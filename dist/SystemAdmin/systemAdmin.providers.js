"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const systemAdmin_entity_1 = require("./systemAdmin.entity");
exports.systemAdminProvider = {
    provide: 'SystemAdminRepository',
    useFactory: (connection) => connection.getRepository(systemAdmin_entity_1.SystemAdminEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=systemAdmin.providers.js.map