"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stateAdmin_entity_1 = require("./stateAdmin.entity");
exports.stateAdminProvider = {
    provide: 'StateAdminRepository',
    useFactory: (connection) => connection.getRepository(stateAdmin_entity_1.StateAdminEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=stateAdmin.providers.js.map