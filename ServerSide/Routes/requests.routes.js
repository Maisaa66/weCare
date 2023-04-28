const router = require("express").Router();
const userControllers = require("../Controllers/user.controllers");
const authMiddleware = require("../Middlewares/auth.middleware");
router.get(
  "/",
  authMiddleware.verifyTokenAndAdmin,
  userControllers.getAllRequests
);

router.get(
  "/:id",
  authMiddleware.verifyTokenAndAuthorization,
  userControllers.getRequestById
);
module.exports = router;
