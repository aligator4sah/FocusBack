"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_entity_1 = require("./session.entity");
exports.sessionProvider = {
    provide: 'SessionRepository',
    useFactory: (connection) => connection.getRepository(session_entity_1.SessionEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=session.providers.js.map