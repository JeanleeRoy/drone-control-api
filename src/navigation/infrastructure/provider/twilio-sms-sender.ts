import { MessageSender } from "~/shared/domain/message-sender";
import { twilioClinet } from "~/shared/infrastructure/provider/twilio-client";

export class TwilioMessageSender implements MessageSender {
  constructor(private phone: string) {}
  async sendMessage(message: string): Promise<void> {
    console.log("[TwilioMessageSender] sendSms");
    await twilioClinet.messages
      .create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: this.phone,
      })
      .then((message) =>
        console.log("[TwilioMessageSender] sendSms end", message.toJSON())
      )
      .catch((error) => {
        console.log("[TwilioMessageSender] sendSms error", error);
        throw new Error("Error sending sms");
      });
  }
}
