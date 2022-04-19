import { Router } from "express";

import saleProductController from "../controllers/saleproductController";

const router = Router();
router.post("/saleproduct", saleProductController.saleProduct);

export default router;


