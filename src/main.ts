import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('Mock API')
    .setDescription('Mock-up server API documentation')
    .setVersion('1.0')
    .addTag('Register')
    .addTag('Login')
    .addTag('Account Management')
    .addTag('Wallet APIs')
    .addTag('Spot')
    .addTag('Market')
    .addTag('Futures')
    .addTag('WebSocket')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
