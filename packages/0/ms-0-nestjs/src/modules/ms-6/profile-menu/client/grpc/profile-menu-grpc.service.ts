import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS_6_PACKAGE_NAME,
  GRPC_PROFILE_MENU_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { ProfileMenuType } from '@ms-0/modules/ms-6/profile-menu/server/graphql/profile-menu.type';
import {
  CreateProfileMenuInput,
  UpdateProfileMenuInput,
  DeleteProfileMenuInput,
  SearchProfileMenuInput,
} from '@ms-0/modules/ms-6/profile-menu/server/graphql/profile-menu.input';

@Injectable()
export class ProfileMenuGrpcService
  extends BaseGrpcService(GRPC_PROFILE_MENU_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    ProfileMenuType,
    CreateProfileMenuInput,
    UpdateProfileMenuInput,
    DeleteProfileMenuInput,
    SearchProfileMenuInput
  >;

  constructor(
    @Inject(GRPC_MS_6_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        ProfileMenuType,
        CreateProfileMenuInput,
        UpdateProfileMenuInput,
        DeleteProfileMenuInput,
        SearchProfileMenuInput
      >
    >(GRPC_PROFILE_MENU_SERVICE_NAME);
  }
}
