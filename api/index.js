import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

// initiating credential from enviornment veriable
dotenv.config();

// Connection to database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err); //database auth error
  });

// initiate express
const app = express();
// allowing json request
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running at 3000!");
});

// test json request
app.use("/api/user", userRoutes);
// AUth route
app.use("/api/auth", authRoutes);
