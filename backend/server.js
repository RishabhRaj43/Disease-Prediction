import express from "express";
import dotenv from "dotenv";
import connect from "./MongoDB/mongoDB.connect.js";
import cors from "cors";


import userRoute from "./route/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

connect();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
