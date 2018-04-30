"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answer_entity_1 = require("./answer.entity");
exports.answerProvider = {
    provide: 'AnswerRepository',
    useFactory: (connection) => connection.getRepository(answer_entity_1.AnswerEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=answer.providers.js.map