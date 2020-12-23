import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms-2/app.module';
import config from '@ms-2/utils/config';
import { ExceptionFilter } from '@gmahechas/common-erp-nestjs';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['country', 'estate', 'city', 'address'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-erp/src/modules/2/index.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new ExceptionFilter());
  await app.listenAsync();
  console.log(`MS-2 is listening on port ${config.port}`);
}
bootstrap();
