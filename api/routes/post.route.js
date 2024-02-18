import express from "express";
import { varifyToken } from "../utils/varifyUser.js";
import { create, getposts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", varifyToken, create)
router.get("/getposts", getposts)

export default router;
