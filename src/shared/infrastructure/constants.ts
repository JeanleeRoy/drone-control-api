export const DRONE_PHONE_NUMBER = process.env.DRONE_PHONE_NUMBER || "";

export enum TOKEN_EXPIRATION_TIME {
  TEXT = "2h",
  NUMBER = 2 * 60 * 60 * 1000,
}
