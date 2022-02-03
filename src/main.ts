import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const options = new DocumentBuilder()
    .setTitle('Cadastro de usuário ROIT Bank')
    .setDescription('Documentação da API de cadastro de usuários do ROIT Bank')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document)

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
