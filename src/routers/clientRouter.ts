import { Router } from "express";

import clientController from "../controllers/clientController";

const router = Router();
router.post("/client", clientController.client);

export default router;


