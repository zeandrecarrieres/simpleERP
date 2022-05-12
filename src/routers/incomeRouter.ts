import { Router } from "express";

import incomeController from "../controllers/incomeController";

const router = Router();
router.post("/income", incomeController.income);
router.get("/income", incomeController.list);
router.get("/income/detail/:_id", incomeController.detail);

export default router;


