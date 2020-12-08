import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createCitySchema = object({
  cityName: Joi.string().min(3).max(30).required(),
  cityCode: Joi.string().min(2).max(4).required(),
  estateId: Joi.string().required()
});

const updateCitySchema = object({
  id: Joi.string().required(),
  cityName: Joi.string().min(3).max(30),
  cityCode: Joi.string().min(2).max(4),
  estateId: Joi.string()
});

const deleteCitySchema = object({
  id: Joi.string().required()
});

export const cityJoiSchema: JoiSchema = ({
  create: createCitySchema,
  update: updateCitySchema,
  delete: deleteCitySchema
});