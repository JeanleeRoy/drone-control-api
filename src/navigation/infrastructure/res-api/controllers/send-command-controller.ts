import { Controller } from "~/shared/infrastructure/controller";
import { ControllerHandler } from "~/shared/infrastructure/types";
import { NewCommandRequest, NewCommandResponse } from "../types";
import { sendNavigationCommandService } from "../services";
import Joi from "joi";

const route = "/navigation/send-new-command";

const handler: ControllerHandler<
  NewCommandRequest,
  NewCommandResponse
> = async ({ data }) => {
  // const { navigationId, command } = data;
  const { command } = data;
  return sendNavigationCommandService(command);
};

const validator = Joi.object<NewCommandRequest>({
  command: Joi.string().required(),
  navigationId: Joi.string().uuid().required(),
});

export default new Controller(route, handler).validator(validator);
