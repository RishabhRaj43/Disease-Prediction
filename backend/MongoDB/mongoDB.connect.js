import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MongoDBUrl;

const connect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("connected to mongodb");
  } catch (err) {
    console.log("Error: ", err.message);
  }
};

export default connect;
