import { Controller } from "~/shared/infrastructure/controller";
import { ControllerHandler } from "~/shared/infrastructure/types";
import { NewCommandRequest, NewCommandResponse } from "../types";
import { sendNavigationCommandService } from "../services";
import Joi from "joi";

const route = "/navigation/private/send-new-command";

const handler: ControllerHandler<
  NewCommandRequest,
  NewCommandResponse
> = async ({ data }) => {
  // const { navigationId, command } = data;
  const { command, test } = data;
  return sendNavigationCommandService(command, test);
};

const validator = Joi.object<NewCommandRequest>({
  command: Joi.string().required(),
  test: Joi.boolean().optional(),
  // navigationId: Joi.string().uuid().required(),
});

export default new Controller(route, handler).validator(validator);
