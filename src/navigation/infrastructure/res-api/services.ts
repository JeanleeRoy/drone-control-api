import { navigationUseCases } from "./dependencies";
import { NewCommandResponse } from "./types";

export const sendNavigationCommandService = async (
  command: string
  // navigationId: string
): Promise<NewCommandResponse> => {
  const message = command; // `#${navigationId} ${command}`
  await navigationUseCases.sendCommand(message);
  return {
    respondedAt: new Date().toISOString(),
    position: "",
    navigation: "", // navigationId,
    command: command,
  };
};
