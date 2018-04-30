"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userDemographic_entity_1 = require("./userDemographic.entity");
exports.userDemographicProvider = {
    provide: 'UserDemographicRepository',
    useFactory: (connection) => connection.getRepository(userDemographic_entity_1.UserDemographicEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=userDemographic.providers.js.map