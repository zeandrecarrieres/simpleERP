const router = require("express").Router();
import testController from "./testController";


router.post("/test", testController.middleware, testController.resp);



export default router;