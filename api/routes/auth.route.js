import express from "express";
import { signup } from "../controllers/auth.controller.js";
import router from "./user.route.js";

const route = express.Router();

router.post("/signup", signup);

export default router;
