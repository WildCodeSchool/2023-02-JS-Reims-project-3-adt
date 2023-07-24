const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { hashPassword, verifyPassword, sendToken } = require("./services/auth");

router.get("/users", userControllers.browse);
router.post("/users", hashPassword, userControllers.add);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.delete("/users/:id", hashPassword, userControllers.destroy);
router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
  sendToken
);

// router.get("/users", userControllers.browse);
// router.get("/users/:id", userControllers.read);
// router.put("/users/:id", userControllers.edit);
// router.post("/users", userControllers.add);
// router.delete("/users/:id", userControllers.destroy);

const questionControllers = require("./controllers/questionControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get(
  "/categories/:categoryId/questions",
  questionControllers.browseByCategory
);

router.get("/questions", questionControllers.browse);
router.get("/categories", categoryControllers.browse);

router.post(
  "/categories/:categoryId/questions",
  questionControllers.addByCategory
);

const answerControllers = require("./controllers/answerControllers");

router.get("/users/:userId/answers", answerControllers.getUserResponses);
router.get("/answers", answerControllers.findAllWithQuestionDetails);
router.post("/answers", answerControllers.createAnswer);

module.exports = router;
