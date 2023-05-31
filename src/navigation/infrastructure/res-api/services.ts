import { navigationUseCases } from "./dependencies";
import { NewCommandResponse } from "./types";

export const sendNavigationCommandService = async (
  command: string,
  test?: boolean
  // navigationId: string
): Promise<NewCommandResponse> => {
  const message = command; // `#${navigationId} ${command}`

  if (test) await navigationUseCases.sendTestCommand(message);
  else await navigationUseCases.sendCommand(message);

  return {
    respondedAt: new Date().toISOString(),
    position: "",
    navigation: "", // navigationId,
    command: command,
  };
};
