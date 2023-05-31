import { MessageSender } from "~/shared/domain/message-sender";

export class MockMessageSender implements MessageSender {
  async sendMessage(message: string): Promise<void> {
    console.log("[MockMessageSender] sendSms");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("[MockMessageSender] payload", message);
        console.log("[MockMessageSender] sendSms end");
        resolve();
      }, 1000);
    });
  }
}
