import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {dashboard,workload,myTickets} from "../controllers/report.controller.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/dashboard",authMiddleware,allowRoles("admin", "supervisor"),dashboard);

router.get("/agent-workload",authMiddleware,allowRoles("admin", "supervisor"),workload);

router.get("/my-tickets",authMiddleware,myTickets);

export default router;
