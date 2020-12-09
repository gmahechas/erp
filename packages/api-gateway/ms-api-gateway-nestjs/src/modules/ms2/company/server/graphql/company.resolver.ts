import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { companyJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { CompanyGrpcService } from '@ms-api-gateway/modules/ms2/company/client/grpc/company-grpc.service';
import { CompanyType } from '@ms-api-gateway/modules/ms2/company/server/graphql/company.type';
import {
  CreateCompanyInput,
  UpdateCompanyInput,
  DeleteCompanyInput,
  SearchCompanyInput,
} from '@ms-api-gateway/modules/ms2/company/server/graphql/company.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class CompanyResolver extends BaseResolver(
  CompanyType,
  CreateCompanyInput,
  UpdateCompanyInput,
  DeleteCompanyInput,
  SearchCompanyInput,
  'Company',
  companyJoiSchema,
) {
  constructor(private readonly companyGrpcService: CompanyGrpcService) {
    super(companyGrpcService);
  }
}