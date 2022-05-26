import { Router } from "express";

import incomeProductsController from "../controllers/incomeProductsController";

const router = Router();
router.post("/incomeproducts", incomeProductsController.incomeProducts);

export default router;


