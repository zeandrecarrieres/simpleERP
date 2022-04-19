import { Router } from "express";

import productController from "../controllers/productController";

const router = Router();
router.post("/product", productController.product);

export default router;


