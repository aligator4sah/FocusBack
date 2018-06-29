import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as path from 'path';
require("reflect-metadata")
const express = require("express")

const port = process.env.PORT || 3000;
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api')
    // app.useGlobalPipes(new ValidationPipe()th;
    app.use(express.static(path.join(__dirname,"..","static")))

    //swagger
    app.enableCors({
        origin: 'http://localhost:4200'
        });
    const options = new DocumentBuilder()
        .setTitle('Focus Backend')
        .setDescription('The Focus API description')
        .setVersion('1.0')
        .addTag('Focus')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/doc', app, document);
    await app.listen(port);
    app.use((req,res,next)=>{
        return res.sendFile(path.join(__dirname,"..","static","index.html"))

    })

}
bootstrap();
