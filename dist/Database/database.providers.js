"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'TypeORMInstance',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.createConnection({
                type: 'postgres',
                host: 'ec2-54-243-137-182.compute-1.amazonaws.com',
                port: 5432,
                username: "rbjwnlyftxwvtu",
                password: "d99601309d5f1a81ca1bd2e3fd42e6c08f121fd0d31b12b71b1a140a1ca2fed9",
                database: 'ddrf9kh51g0sf2',
                url: 'postgres://rbjwnlyftxwvtu:d99601309d5f1a81ca1bd2e3fd42e6c08f121fd0d31b12b71b1a140a1ca2fed9@ec2-54-243-137-182.compute-1.amazonaws.com:5432/ddrf9kh51g0sf2',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                logging: true,
                synchronize: true
            });
        }),
    }
];
//# sourceMappingURL=database.providers.js.map