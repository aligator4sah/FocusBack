"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_entity_1 = require("./city.entity");
exports.cityProvider = {
    provide: 'CityRepository',
    useFactory: (connection) => connection.getRepository(city_entity_1.CityEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=city.providers.js.map