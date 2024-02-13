import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  signout
} from "../controllers/user.controller.js";
import { varifyToken } from "../utils/varifyUser.js";

// initiate route
const router = express.Router();

// Define route
router.get("/test", test); // referring from contriller
router.put("/update/:userId", varifyToken, updateUser); //user info update route after checing the cookie from the browser
router.delete("/delete/:userId", varifyToken, deleteUser); //delete user info using verifiying token
router.post("/signout", signout);
// exporting route
export default router;
