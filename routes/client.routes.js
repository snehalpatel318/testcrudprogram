import express from "express";
import {listClients,verify,deactivate,} from "../controllers/client.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/",authMiddleware,allowRoles("admin"),listClients);

router.patch("/:id/verify",authMiddleware,allowRoles("admin"),verify);

router.patch("/:id/deactivate",authMiddleware,allowRoles("admin"),deactivate);

export default router;
