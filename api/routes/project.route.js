import express from "express";
import { varifyToken } from "../utils/varifyUser.js";
import {
  create,
  getprojects,
  deleteproject,
  updateproject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create", varifyToken, create);
router.get("/getprojects", getprojects);
router.delete("/deleteproject/:projectId/:userId", varifyToken, deleteproject);
router.put("/updateproject/:projectId/:userId", varifyToken, updateproject);

export default router;
