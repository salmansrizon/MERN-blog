import express from "express";
import { varifyToken } from "../utils/varifyUser.js";
import { create, getposts , deletepost , updatepost} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", varifyToken, create)
router.get("/getposts", getposts)
router.delete("/deletepost/:postId/:userId", varifyToken, deletepost)
router.put("/updatepost/:postId/:userId", varifyToken, updatepost)

export default router;
