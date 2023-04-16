const router = require("express").Router();
const userControllers = require("../Controllers/user.controllers");
const authMiddleware = require("../Middlewares/auth.middleware");

//Admin Routes
router.get(
  "/",
  authMiddleware.verifyTokenAndAdmin,
  userControllers.getAllUsers
);
router.get(
  "/:id",
  authMiddleware.verifyTokenAndAdmin,
  userControllers.getUserById
);
router.patch(
  "/:id",
  authMiddleware.verifyTokenAndAuthorization,
  userControllers.updateUserById
);
router.delete(
  "/:id",
  authMiddleware.verifyTokenAndAdmin,
  userControllers.deleteUserById
);

//User Routes
router.post("/signup", userControllers.addNewUser);

// router.post("/login", authMiddleware.verifyToken, userControllers.login);
router.post("/login", userControllers.login);

module.exports = router;
