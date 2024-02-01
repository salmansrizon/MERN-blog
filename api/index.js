import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

// initiating credential from enviornment veriable 
dotenv.config();

// Connection to database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);  //database auth error
  });

// initiate express
const app = express();

app.listen(3000, () => {
  console.log("Server is running at 3000!");
});
