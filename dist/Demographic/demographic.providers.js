"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demographic_entity_1 = require("./demographic.entity");
exports.demographicProvider = {
    provide: 'DemographicRepository',
    useFactory: (connection) => connection.getRepository(demographic_entity_1.DemographicEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=demographic.providers.js.map