"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const county_entity_1 = require("./county.entity");
exports.countyProvider = {
    provide: 'CountyRepository',
    useFactory: (connection) => connection.getRepository(county_entity_1.CountyEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=county.providers.js.map