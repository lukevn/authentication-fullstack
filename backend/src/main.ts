import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { APP_PORT, APP_ENV, APP_VERSION } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (APP_ENV !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Authentication Backend')
      .setDescription('The Authentication API with NestJS')
      .setVersion(APP_VERSION)
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(APP_PORT);
}
bootstrap();
