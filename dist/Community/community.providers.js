"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const community_entity_1 = require("./community.entity");
exports.communityProvider = {
    provide: 'CommunityRepository',
    useFactory: (connection) => connection.getRepository(community_entity_1.CommunityEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=community.providers.js.map