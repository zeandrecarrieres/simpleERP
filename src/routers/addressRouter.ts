import { Router } from "express";

import addressController from "../controllers/addressController";


const router = Router();
router.post("/address", addressController.address);
router.get("/address", addressController.list);
router.get("/address/client/:referenceId/:referenceType", addressController.clientAddresses);

export default router;


