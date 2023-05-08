import Joi from "joi";

export const getUserSchema = Joi.object({
  uuid: Joi.string().uuid().required(),
});
