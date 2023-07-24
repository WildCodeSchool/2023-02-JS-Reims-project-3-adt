const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { hashPassword, verifyPassword, sendToken } = require("./services/auth");

router.get("/users", userControllers.browse);
router.post("/users", hashPassword, userControllers.add);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", hashPassword, userControllers.destroy);

const questionControllers = require("./controllers/questionControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get(
  "/categories/:categoryId/questions",
  questionControllers.browseByCategory
);
router.get("/categories", categoryControllers.browse);
router.get("/users/:userId/responses", questionControllers.getUserResponses);

router.post(
  "/categories/:categoryId/questions",
  questionControllers.addByCategory
);

//    USERS

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
  sendToken
);

module.exports = router;
