import { Router } from "express";

import transactionProductsController from "../controllers/transactionProductsController";


const router = Router();
router.post("/transaction", transactionProductsController.transactionProducts);
// router.get("/address", addressController.list);
router.get("/transaction/:transactionId/:referenceType", transactionProductsController.transactionProducts);
// router.get("/address/supplier/:referenceId/:referenceType", addressController.supplierAddresses);

export default router;


