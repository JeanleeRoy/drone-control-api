import { navigationUseCases } from "./dependencies";
import { NewCommandResponse } from "./types";

export const sendNavigationCommandService = async (
  navigationId: string,
  command: string
): Promise<NewCommandResponse> => {
  const message = `#${navigationId} ${command}`
  await navigationUseCases.sendCommand(message);
  return {
    uuid: "uuid",
    createdAt: new Date().toISOString(),
    navigation: navigationId,
    command: command,
  };
};
