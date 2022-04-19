import { Router } from "express";

import saleController from "../controllers/saleController";

const router = Router();
router.post("/sale", saleController.sale);

export default router;


