import { NavigationUseCases } from "~/navigation/application";
import { TwilioMessageSender } from "../provider/twilio-sms-sender";
import * as CONSTANT from "~/shared/infrastructure/constants";
import { useSendCommand } from "~/navigation/application/use-send-comand";

// Providers

export const twilioSmsSender = new TwilioMessageSender(
  CONSTANT.DRONE_PHONE_NUMBER
);

// Use cases

export const navigationUseCases = {
  sendCommand: useSendCommand(twilioSmsSender),
};
