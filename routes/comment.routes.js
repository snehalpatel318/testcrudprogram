import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {createComment,listComments} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/:ticketId",authMiddleware,createComment);

router.get("/:ticketId",authMiddleware,listComments);

export default router;
