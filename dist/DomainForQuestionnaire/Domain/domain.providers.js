"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_entity_1 = require("./domain.entity");
exports.domainProvider = {
    provide: 'DomainRepository',
    useFactory: (connection) => connection.getRepository(domain_entity_1.DomainEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=domain.providers.js.map