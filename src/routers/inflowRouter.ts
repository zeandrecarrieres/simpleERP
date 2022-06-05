import { Router } from "express";

import inflowController from "../controllers/inflowController";

const router = Router();
router.get("/inflow", inflowController.list);
// router.get("/client/profile/:id", clientController.profile);


export default router;


