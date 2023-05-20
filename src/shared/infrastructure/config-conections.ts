import mongoConection from "./provider/mongo-db";

export const configConnections = async () => {
  await mongoConection();
};
