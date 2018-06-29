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
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const path = require("path");
require("reflect-metadata");
const express = require("express");
const port = process.env.PORT || 3000;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('/api');
        app.use(express.static(path.join(__dirname, "..", "static")));
        app.enableCors({
            origin: 'http://localhost:4200'
        });
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Focus Backend')
            .setDescription('The Focus API description')
            .setVersion('1.0')
            .addTag('Focus')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('/doc', app, document);
        yield app.listen(port);
        app.use((req, res, next) => {
            return res.sendFile(path.join(__dirname, "..", "static", "index.html"));
        });
    });
}
bootstrap();
//# sourceMappingURL=main.js.map