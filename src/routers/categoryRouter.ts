import { Router } from "express";

import categoryController from "../controllers/categoryController";

const router = Router();
router.post("/category", categoryController.category);

export default router;


