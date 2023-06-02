const { Vonage } = require("@vonage/server-sdk");

const apiKey = process.env.VONAGE_API_KEY;
const apiSecret = process.env.VONAGE_API_SECRET;

const vonageClient = new Vonage({ apiKey, apiSecret });

export { vonageClient };