"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socialNetwork_entity_1 = require("./socialNetwork.entity");
exports.socialNetworkProvider = {
    provide: 'SocialNetworkRepository',
    useFactory: (connection) => connection.getRepository(socialNetwork_entity_1.SocialNetworkEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=socialNetwork.providers.js.map