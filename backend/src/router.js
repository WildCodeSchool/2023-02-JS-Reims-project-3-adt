const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { hashPassword, verifyPassword, sendToken } = require("./services/auth");

router.get("/users", userControllers.browse);
router.post("/users", hashPassword, userControllers.add);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.delete("/users/:id", hashPassword, userControllers.destroy);

const questionControllers = require("./controllers/questionControllers");
const categoryControllers = require("./controllers/categoryControllers");
const answerControllers = require("./controllers/AnswerControllers");

router.get(
  "/categories/:categoryId/questions",
  questionControllers.browseByCategory
);
router.get("/categories", categoryControllers.browse);
router.get("/questions", questionControllers.browse);
router.get("/users/:userId/answers", answerControllers.getUserResponses);
router.get("/answers", answerControllers.findAllWithQuestionDetails);

router.post(
  "/categories/:categoryId/questions",
  questionControllers.addByCategory
);
router.post("/answers", answerControllers.createAnswer);

//    USERS

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
  sendToken
);

module.exports = router;
