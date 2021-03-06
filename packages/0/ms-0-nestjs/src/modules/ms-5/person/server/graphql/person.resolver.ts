import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { personJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { PersonGrpcService } from '@ms-0/modules/ms-5/person/client/grpc/person-grpc.service';
import { PersonType } from '@ms-0/modules/ms-5/person/server/graphql/person.type';
import {
  CreatePersonInput,
  UpdatePersonInput,
  DeletePersonInput,
  SearchPersonInput,
} from '@ms-0/modules/ms-5/person/server/graphql/person.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class PersonResolver extends BaseResolver(
  PersonType,
  CreatePersonInput,
  UpdatePersonInput,
  DeletePersonInput,
  SearchPersonInput,
  'Person',
  personJoiSchema,
) {
  constructor(private readonly personGrpcService: PersonGrpcService) {
    super(personGrpcService);
  }
}
