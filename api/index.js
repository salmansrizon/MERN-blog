import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import path from 'path';
import cookieParser from "cookie-parser"; //for cookie management
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

  // setting up dynamic dir path
  const __dirname = path.resolve();

// initiate express
const app = express();
// allowing json request
app.use(express.json());
// inititalize cookie perser
app.use(cookieParser()); //this is for extract cookie form the browser

app.listen(3000, () => {
  console.log("Server is running at 3000!");
});

// test json request
app.use("/api/user", userRoutes);
// AUth route
app.use("/api/auth", authRoutes);

// for creating building dir in serverdeployment
app.use(express.static(path.join(__dirname,'/client/dist')));
// for invalid url selecting to default route to indexedDB.html
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'client','dist','index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
