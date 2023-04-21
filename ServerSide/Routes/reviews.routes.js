const router = require("express").Router();
const userControllers = require("../Controllers/user.controllers");
const authMiddleware = require("../Middlewares/auth.middleware");
router.get(
  "/",
  authMiddleware.verifyTokenAndAdmin,
  userControllers.getAllReviews
);
module.exports = router;
