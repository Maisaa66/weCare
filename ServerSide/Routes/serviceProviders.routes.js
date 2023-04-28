const router = require("express").Router();
const serviceProviderControllers = require("../Controllers/serviceProvider.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

// router.get("/", authMiddleware.verifyTokenAndAdmin, serviceProviderControllers.getProviders);
router.get("/", serviceProviderControllers.getProviders);
router.post("/login", serviceProviderControllers.login);
router.post("/signup", serviceProviderControllers.addNewProvider);

router.get("/:id", authMiddleware.verifyTokenAndAdmin, serviceProviderControllers.getProviderById);
router.patch(
  "/:id",
  authMiddleware.verifyTokenAndAuthorization,
  serviceProviderControllers.updateProviderById
);
router.delete(
  "/:id",
  authMiddleware.verifyTokenAndAuthorization,
  serviceProviderControllers.deleteProviderById
);

module.exports = router;
