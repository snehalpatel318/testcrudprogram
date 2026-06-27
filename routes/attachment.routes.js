import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";
import { uploadFile } from "../controllers/attachment.controller.js";

const router = express.Router();

router.post("/:ticketId",authMiddleware,upload.single("file"),uploadFile);

export default router;
