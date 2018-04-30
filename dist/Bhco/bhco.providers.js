"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bhco_entity_1 = require("./bhco.entity");
exports.bhcoProvider = {
    provide: 'BhcoRepository',
    useFactory: (connection) => connection.getRepository(bhco_entity_1.BhcoEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=bhco.providers.js.map