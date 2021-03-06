import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import redis from '@ms-0/utils/redis';

import { HttpExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@ms-0/app.module';
import config from '@ms-0/utils/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', 1);
  app.use(redis);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listenAsync(config.port);
  console.info(`MS-3 is listening on port ${config.port}`);
}
bootstrap();
