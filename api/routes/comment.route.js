import express from "express";
import { varifyToken } from "../utils/varifyUser.js";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getComments,
  likeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", varifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likeComment/:commentId", varifyToken, likeComment);
router.put("/editComment/:commentId", varifyToken, editComment);
router.delete("/deleteComment/:commentId", varifyToken, deleteComment);
router.get("/getcomments", varifyToken, getComments);

export default router;
