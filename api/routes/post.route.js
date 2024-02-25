import express from "express";
import { varifyToken } from "../utils/varifyUser.js";
import { create, getposts , deletepost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", varifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", varifyToken, deletepost);

export default router;
