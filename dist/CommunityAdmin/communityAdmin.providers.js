"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const communityAdmin_entity_1 = require("./communityAdmin.entity");
exports.communityAdminProvider = {
    provide: 'CommunityAdminRepository',
    useFactory: (connection) => connection.getRepository(communityAdmin_entity_1.CommunityAdminEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=communityAdmin.providers.js.map