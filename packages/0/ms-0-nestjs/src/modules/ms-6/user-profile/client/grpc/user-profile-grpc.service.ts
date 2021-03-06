import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS_6_PACKAGE_NAME,
  GRPC_USER_PROFILE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { UserProfileType } from '@ms-0/modules/ms-6/user-profile/server/graphql/user-profile.type';
import {
  CreateUserProfileInput,
  UpdateUserProfileInput,
  DeleteUserProfileInput,
  SearchUserProfileInput,
} from '@ms-0/modules/ms-6/user-profile/server/graphql/user-profile.input';

@Injectable()
export class UserProfileGrpcService
  extends BaseGrpcService(GRPC_USER_PROFILE_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    UserProfileType,
    CreateUserProfileInput,
    UpdateUserProfileInput,
    DeleteUserProfileInput,
    SearchUserProfileInput
  >;

  constructor(
    @Inject(GRPC_MS_6_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        UserProfileType,
        CreateUserProfileInput,
        UpdateUserProfileInput,
        DeleteUserProfileInput,
        SearchUserProfileInput
      >
    >(GRPC_USER_PROFILE_SERVICE_NAME);
  }
}
