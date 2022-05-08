import { Router } from "express";

import supplierController from "../controllers/supplierController";

const router = Router();
router.post("/supplier", supplierController.supplier);
router.get("/supplier", supplierController.list);
router.get("/supplier/profile/:id", supplierController.profile);


export default router;


