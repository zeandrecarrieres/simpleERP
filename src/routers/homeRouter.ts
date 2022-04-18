import { Router } from "express";

import homeController from "../controllers/homeController";

const router = Router();

router.get("/", homeController.home);

export default router;


