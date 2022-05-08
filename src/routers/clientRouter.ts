import { Router } from "express";

import clientController from "../controllers/clientController";

const router = Router();
router.post("/client", clientController.client);
router.get("/client", clientController.list);
router.get("/client/profile/:id", clientController.profile);


export default router;


