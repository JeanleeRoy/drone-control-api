import { MessageSender } from "~/shared/domain/message-sender";
import { vonageClient } from "~/shared/infrastructure/provider/sms/vonage-client";

export class VonageMessageSender implements MessageSender {
  constructor(private phone: string) {}
  async sendMessage(message: string): Promise<void> {
    console.log("[VonageMessageSender] sendSms start");
    await vonageClient.sms
      .send({
        to: this.phone,
        from: 'Vonage APIs',
        text: message,
      })
      .then((message: any) =>
        console.log("[VonageMessageSender] sendSms end", message)
      )
      .catch((error: Error) => {
        console.log("[VonageMessageSender] ", error.message);
        throw new Error("Error sending sms");
      });
  }
}
