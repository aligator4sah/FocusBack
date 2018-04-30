"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const family_entity_1 = require("./family.entity");
exports.familyProvider = {
    provide: 'FamilyRepository',
    useFactory: (connection) => connection.getRepository(family_entity_1.FamilyEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=family.providers.js.map