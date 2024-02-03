import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";
import router from "./user.route.js";

const route = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
