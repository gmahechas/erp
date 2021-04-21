import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { logger } from '@gmahechas/common-erp';
import { ExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@ms-5/app.module';
import config from '@ms-5/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      logger: ['error', 'warn', 'debug', 'verbose'],
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['type_person', 'type_identification', 'person'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-erp/src/modules/5/index.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new ExceptionFilter());
  await app.listenAsync();
  logger.debug(`MS-5 is listening on port ${config.port}`);
}
bootstrap();
