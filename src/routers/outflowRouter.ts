import { Router } from "express";

import outflowController from "../controllers/outflowController";

const router = Router();
router.get("/outflow", outflowController.list);
// router.get("/client/profile/:id", clientController.profile);


export default router;


