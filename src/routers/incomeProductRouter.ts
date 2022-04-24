import { Router } from "express";

import saleProductController from "../controllers/saleProductController";

const router = Router();
router.post("/saleproduct", saleProductController.saleProduct);

export default router;


