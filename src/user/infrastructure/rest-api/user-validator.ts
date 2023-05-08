import { requestValidator } from "../../../shared/infrastructure/middleware/validate-request";
import Joi from "joi";

export const getUserSchema = Joi.object({
  uuid: Joi.string().uuid().required(),
});

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default requestValidator;
