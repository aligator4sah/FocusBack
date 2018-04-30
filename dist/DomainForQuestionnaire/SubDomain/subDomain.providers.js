"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subDomain_entity_1 = require("./subDomain.entity");
exports.subDomainProvider = {
    provide: 'SubDomainRepository',
    useFactory: (connection) => connection.getRepository(subDomain_entity_1.SubDomainEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=subDomain.providers.js.map