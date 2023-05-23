import { Controller } from "~/shared/infrastructure/controller";
import { ControllerHandler } from "~/shared/infrastructure/types";
import { UserResponse } from "../types";
import { getAllUsersService } from "../user-services";

const route = "/user/private/get-all-users";

const handler: ControllerHandler<{}, UserResponse[]> = async () => {
  return getAllUsersService();
};

export default new Controller(route, handler);
