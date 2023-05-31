import { NavigationUseCases } from "~/navigation/application";
import { TwilioMessageSender } from "../provider/twilio-sms-sender";
import * as CONSTANT from "~/shared/infrastructure/constants";
import { useSendCommand } from "~/navigation/application/use-send-comand";
import { MockMessageSender } from "../provider/mock-sms-sender";

// Providers

export const twilioSmsSender = new TwilioMessageSender(
  CONSTANT.DRONE_PHONE_NUMBER
);

const mockSmsSender = new MockMessageSender();

// Use cases

export const navigationUseCases = {
  sendCommand: useSendCommand(twilioSmsSender),
  sendTestCommand: useSendCommand(mockSmsSender),
};
