import { Controller } from "~/shared/infrastructure/controller";
import { ControllerHandler } from "~/shared/infrastructure/types";
import { LoginUserRequest, LoginUserResponse } from "../types";
import { loginUserService } from "../user-services";
import Joi from "joi";

const route = "/user/login";

const handler: ControllerHandler<LoginUserRequest, LoginUserResponse | null> = async ({
  data,
}) => {
  const { email, password } = data;
  return loginUserService(email, password);
};

const validator = Joi.object<LoginUserRequest>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default new Controller(route, handler).validator(validator);
