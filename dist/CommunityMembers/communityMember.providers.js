"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const communityMember_entity_1 = require("./communityMember.entity");
exports.communityMemberProvider = {
    provide: 'CommunityMemberRepository',
    useFactory: (connection) => connection.getRepository(communityMember_entity_1.CommunityMemberEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=communityMember.providers.js.map