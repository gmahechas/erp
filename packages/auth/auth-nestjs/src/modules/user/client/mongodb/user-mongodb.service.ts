import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  IEntityMany,
  IEntityOne,
  IUser,
  UserDocument,
} from '@gmahechas/common-erp';

import { GRPC_USER_SERVICE_NAME } from '@auth/utils/constants';

@Injectable()
export class UserMongodbService {
  constructor(
    @InjectModel(GRPC_USER_SERVICE_NAME)
    private readonly entityModel: Model<UserDocument>,
  ) {}

  async createOne(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
    const model = new this.entityModel(dataEntity);
    return { entity: await model.save() };
  }

  async updateOne(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
    const entity = await this.entityModel.findById(dataEntity.id);
    if (entity) {
      Object.assign(entity, dataEntity);
      const result = await this.entityModel.updateOne(
        { _id: dataEntity.id },
        entity,
      );
      if (result.ok) {
        return { entity };
      } else {
        return { entity: null };
      }
    } else {
      return { entity: null };
    }
  }

  async deleteOne(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
    const entity = await this.entityModel.findById(dataEntity.id);
    if (entity) {
      const result = await this.entityModel.deleteOne({ _id: dataEntity.id });
      if (result.ok) {
        return { entity };
      } else {
        return { entity: null };
      }
    } else {
      return { entity: null };
    }
  }

  async searchById(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
    return {
      entity: await this.entityModel.findById({ _id: dataEntity.id }),
    };
  }

  async searchMany(data: IEntityMany<IUser>): Promise<IEntityMany<IUser>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

  async searchOneByUsername(userName: string): Promise<IUser> {
    return await this.entityModel.findOne({ userName });
  }
}
