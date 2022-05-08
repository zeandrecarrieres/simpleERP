import { Router } from "express";

import productController from "../controllers/productController";

const router = Router();
router.post("/product", productController.product);
router.get("/product", productController.list);
router.get("/product/profile/:id", productController.profile);

export default router;


