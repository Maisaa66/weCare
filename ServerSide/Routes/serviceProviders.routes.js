const router = require("express").Router();
const serviceProviderControllers = require("../Controllers/serviceProvider.controller");
// const authMiddleware = require("../Middlewares/auth.middleware");

router.post("/login", serviceProviderControllers.login);
router.post("/signup", serviceProviderControllers.addNewProvider);

module.exports = router;
