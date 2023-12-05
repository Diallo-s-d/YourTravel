const express = require("express");

const router = express.Router();

const announceControllers = require("./controllers/announceControllers");
const userControllers = require("./controllers/userControllers");
const auth = require("./middlewares/auth");
const newsletterControllers = require("./controllers/newsletterControllers");

router.get("/announces", announceControllers.select);
router.get("/announces/:id", announceControllers.getTravelDetails);
router.get("/listAnnounces", announceControllers.browse);

router.post("/newsletters", newsletterControllers.add);
router.get("/newsletters/:id", newsletterControllers.read);

router.get("/users", userControllers.browse);
// router.post("/user", userControllers.add);

router.delete("/users/:id", userControllers.destroy);
router.put("/users/:id", userControllers.edit);
router.get("/users/:id", userControllers.read);

router.post(
  "/users",
  auth.validateUser,
  auth.hashPassword,
  userControllers.add
);
router.post("/logins", auth.checkEmailIfExist, userControllers.verifyPassword);

module.exports = router;
