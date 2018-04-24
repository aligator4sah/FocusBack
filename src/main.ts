import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
require("reflect-metadata")


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(new ValidationPipe());
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
    SwaggerModule.setup('/api', app, document);
    await app.listen(3000);
}
bootstrap();
