import express from "express";
import { verifyUser } from "../controller/authController.js";

const router = express.Router();

router.post("/login", verifyUser);

export default router;
