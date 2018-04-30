"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionnaire_entity_1 = require("./questionnaire.entity");
exports.questionnaireProvider = {
    provide: 'QuestionnaireRepository',
    useFactory: (connection) => connection.getRepository(questionnaire_entity_1.QuestionnaireEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=questionnaire.providers.js.map