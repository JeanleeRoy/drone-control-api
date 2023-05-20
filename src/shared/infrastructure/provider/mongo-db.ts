import { connect } from "mongoose";

const DB_URI = `${process.env.MONGO_DB_URI}`;

const mongoConection = async () => {
  await connect(DB_URI);
  console.log("MongoDB is connected");
};

export default mongoConection;
