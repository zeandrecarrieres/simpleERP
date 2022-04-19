import { Router } from "express";

import addressController from "../controllers/addressController";

const router = Router();
router.post("/address", addressController.address);

export default router;


