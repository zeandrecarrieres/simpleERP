import { Router } from "express";

import stockController from "../controllers/stockController";

const router = Router();
router.post("/stock", stockController.stock);

export default router;


