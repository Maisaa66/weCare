const router = require("express").Router();
const userModel = require("../Models/users.model");
const userControllers = require("../Controllers/user.controllers");

router.get("/", userControllers.getAllUsers);

router.post("/signup", userControllers.addNewUser);

module.exports = router;
