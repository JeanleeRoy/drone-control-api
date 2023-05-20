import { MessageSender } from "~/shared/domain/message-sender";

export const useSendCommand = (messageSender: MessageSender) => {
  return async (command: string) => {
    console.log("[NavigationUseCases] useSendCommand");

    await messageSender.sendMessage(command);

    console.log("[NavigationUseCases] useSendCommand end");
  };
};
