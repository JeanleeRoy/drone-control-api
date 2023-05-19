import { Controller } from "~/shared/infrastructure/controller";
import { ControllerHandler } from "~/shared/infrastructure/types";
import { GetUserRequest, UserResponse } from "../types";
import { getUserService } from "../user-services";
import Joi from "joi";

const route = "/user/get-user-by-id";

const handler: ControllerHandler<GetUserRequest, UserResponse> = async ({
  data,
}) => {
  const { uuid } = data;
  return getUserService(uuid);
};

const validator = Joi.object({
  uuid: Joi.string().uuid().required(),
});

export default new Controller(route, handler).validator(validator);
