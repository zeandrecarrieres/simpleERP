const router = require("express").Router();
import userController from "./userController";


router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/create", userController.create);
router.get("/user", userController.list);
router.get("/user/profile/:id", userController.profile);


export default router;