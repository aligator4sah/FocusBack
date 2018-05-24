"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relationship_entity_1 = require("./relationship.entity");
exports.relationshipProvider = {
    provide: 'RelationshipRepository',
    useFactory: (connection) => connection.getRepository(relationship_entity_1.RelationshipEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=relationship.providers.js.map