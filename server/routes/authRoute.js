import express from "express";
import { verifyUser } from "../controller/authController.js";
import { createProject, getProjects } from "../controller/projectController.js";
import { uploadImageController } from "../controller/upload.js";

const router = express.Router();

router.post("/login", verifyUser);

router.post('/create', createProject)
router.get('/projects', getProjects)
router.post('/upload', uploadImageController)

export default router;
