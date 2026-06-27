import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

import {create,list,updateStatus,assign} from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/",authMiddleware,allowRoles("client"),create);

router.get("/",authMiddleware,allowRoles("client","agent","supervisor","admin",),list,);

router.patch("/:id/status",authMiddleware,allowRoles("agent","supervisor","admin"),updateStatus);

router.patch("/:id/assign",authMiddleware,allowRoles("supervisor","admin"),assign);

export default router;
