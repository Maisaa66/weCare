const router = require("express").Router();
const userModel = require("../Models/users.model");
const userControllers = require("../Controllers/user.controllers");
const authMiddleware= require('../Middlewares/auth.middleware')

router.get("/", userControllers.getAllUsers);

router.post("/signup", userControllers.addNewUser);

// router.post("/login",authMiddleware.verifyToken, userControllers.login);
router.post("/login", userControllers.login);


module.exports = router;
