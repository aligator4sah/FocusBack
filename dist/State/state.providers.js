"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_entity_1 = require("./state.entity");
exports.stateProvider = {
    provide: 'StateRepository',
    useFactory: (connection) => connection.getRepository(state_entity_1.StateEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=state.providers.js.map