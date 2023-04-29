const router = require("express").Router();
const userControllers = require("../Controllers/user.controllers");
const providerControllers = require("../Controllers/serviceProvider.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

router.get(
  "/",
  authMiddleware.verifyTokenAndAdmin,
  userControllers.getAllRequests
);

router.get(
  "/user/:id",
  authMiddleware.verifyTokenAndAuthorization,
  userControllers.getRequestById
);

router.get(
  "/provider/:id",
  authMiddleware.verifyTokenAndAuthorization,
  providerControllers.getRequestById
);
module.exports = router;
