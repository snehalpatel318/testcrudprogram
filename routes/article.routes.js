import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

import {create,list,single,update} from "../controllers/article.controller.js";

const router = express.Router();

router.get("/",list);

router.get("/:id",single);

router.post("/",authMiddleware,allowRoles("agent","supervisor","admin"),create);

router.patch("/:id",authMiddleware,allowRoles("agent","supervisor","admin"),update);

export default router;
