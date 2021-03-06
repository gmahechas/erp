import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { OfficeResolver } from '@ms-0/modules/ms-4/office/server/graphql/office.resolver';
import { OfficeGrpcService } from '@ms-0/modules/ms-4/office/client/grpc/office-grpc.service';

@Module({
  providers: [grpcMs4, OfficeResolver, OfficeGrpcService],
})
export class OfficeModule {}
