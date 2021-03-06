import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { userJoiSchema } from '@gmahechas/common-erp';
import {
  GraphqlValidationPipe,
  GqlAuthGuard,
} from '@gmahechas/common-erp-nestjs';

import { UserGrpcService } from '@ms-0/modules/ms-1/user/client/grpc/user-grpc.service';
import { UserType } from '@ms-0/modules/ms-1/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@ms-0/modules/ms-1/user/server/graphql/user.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private readonly userGrpcService: UserGrpcService) {}

  @Mutation(() => UserType, { name: `createOneUser`, nullable: true })
  async createOne(
    @Args(
      'entity',
      { type: () => CreateUserInput },
      new GraphqlValidationPipe(userJoiSchema.createOne),
    )
    entity: CreateUserInput,
  ): Promise<Partial<UserType>> {
    return (await this.userGrpcService.createOne({ entity })).entity;
  }

  @Mutation(() => UserType, { name: `updateOneUser`, nullable: true })
  async updateOne(
    @Args(
      'entity',
      { type: () => UpdateUserInput },
      new GraphqlValidationPipe(userJoiSchema.updateOne),
    )
    entity: UpdateUserInput,
  ): Promise<Partial<UserType>> {
    return (await this.userGrpcService.updateOne({ entity })).entity;
  }

  @Mutation(() => UserType, { name: `deleteOneUser`, nullable: true })
  async deleteOne(
    @Args(
      'entity',
      { type: () => DeleteUserInput },
      new GraphqlValidationPipe(userJoiSchema.deleteOne),
    )
    entity: DeleteUserInput,
  ): Promise<Partial<UserType>> {
    return (await this.userGrpcService.deleteOne({ entity })).entity;
  }

  @Query(() => UserType, { name: `searchOneUser`, nullable: true })
  async searchOne(
    @Args(
      'entity',
      { type: () => SearchUserInput },
      new GraphqlValidationPipe(userJoiSchema.searchOne),
    )
    entity: SearchUserInput,
  ): Promise<Partial<UserType>> {
    return (await this.userGrpcService.searchOne({ entity })).entity;
  }

  @Query(() => [UserType], { name: `searchManyUser`, nullable: true })
  async searchMany(
    @Args(
      'entities',
      { type: () => [SearchUserInput] },
      new GraphqlValidationPipe(userJoiSchema.searchMany),
    )
    entities: [SearchUserInput],
  ): Promise<Partial<UserType>[]> {
    return (await this.userGrpcService.searchMany({ entities })).entities;
  }
}
