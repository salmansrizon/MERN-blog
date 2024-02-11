import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { varifyToken } from "../utils/varifyUser.js";

// initiate route
const router = express.Router();

// Define route
router.get("/test", test); // referring from contriller
router.put("/update/:userId", varifyToken, updateUser); //user info update route after checing the cookie from the browser
// exporting route
export default router;
