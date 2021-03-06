import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { typeIdentificationJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { TypeIdentificationGrpcService } from '@ms-0/modules/ms-5/type-identification/client/grpc/type-identification-grpc.service';
import { TypeIdentificationType } from '@ms-0/modules/ms-5/type-identification/server/graphql/type-identification.type';
import {
  CreateTypeIdentificationInput,
  UpdateTypeIdentificationInput,
  DeleteTypeIdentificationInput,
  SearchTypeIdentificationInput,
} from '@ms-0/modules/ms-5/type-identification/server/graphql/type-identification.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class TypeIdentificationResolver extends BaseResolver(
  TypeIdentificationType,
  CreateTypeIdentificationInput,
  UpdateTypeIdentificationInput,
  DeleteTypeIdentificationInput,
  SearchTypeIdentificationInput,
  'TypeIdentification',
  typeIdentificationJoiSchema,
) {
  constructor(
    private readonly typeIdentificationGrpcService: TypeIdentificationGrpcService,
  ) {
    super(typeIdentificationGrpcService);
  }
}
