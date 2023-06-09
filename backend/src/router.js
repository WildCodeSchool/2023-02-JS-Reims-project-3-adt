const express = require("express");

const router = express.Router();
const questionControllers = require("./controllers/questionControllers");

router.get(
  "/categories/:categoryId/questions",
  questionControllers.browseByCategory
);
router.post(
  "/questions/category/:categoryId",
  questionControllers.addByCategory
);

module.exports = router;
