import express from "express";
import { varifyToken } from "../utils/varifyUser.js";
import { create } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", varifyToken, create);

export default router;
