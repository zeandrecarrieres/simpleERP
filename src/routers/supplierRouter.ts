import { Router } from "express";

import supplierController from "../controllers/supplierController";

const router = Router();
router.post("/supplier", supplierController.supplier);

export default router;


