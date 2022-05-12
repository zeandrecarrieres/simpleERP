import { Router } from "express";

import saleController from "../controllers/saleController";

const router = Router();
router.post("/sale", saleController.sale);
router.get("/sale", saleController.list);
router.get("/sale/detail/:id", saleController.detail);

export default router;


 