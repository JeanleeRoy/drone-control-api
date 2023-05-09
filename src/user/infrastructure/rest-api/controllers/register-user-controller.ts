import { Controller } from "../../../../shared/infrastructure/controller";
import { ControllerHandler } from "../../../../shared/infrastructure/types";
import { RegisterUserRequest, UserResponse } from "../types";
import { registerUserService } from "../user-services";
import Joi from "joi";

const route = "/user/register-new-user";

const handler: ControllerHandler<RegisterUserRequest, UserResponse> = async ({
  data,
}) => {
  const { email, name, password } = data;
  return registerUserService(name, email, password);
};

const validator = Joi.object<RegisterUserRequest>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export default new Controller(route, handler).validator(validator);
