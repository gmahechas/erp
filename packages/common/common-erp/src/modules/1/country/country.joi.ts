import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createCountrySchema = object({
  countryName: Joi.string().min(3).max(30).required(),
  countryCode: Joi.string().min(2).max(4).required()
});

const updateCountrySchema = object({
  id: Joi.string().required(),
  countryName: Joi.string().min(3).max(30),
  countryCode: Joi.string().min(2).max(4)
});

const deleteCountrySchema = object({
  id: Joi.string().required()
});

export const countryJoiSchema: JoiSchema = ({
  create: createCountrySchema,
  update: updateCountrySchema,
  delete: deleteCountrySchema
});
