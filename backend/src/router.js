const express = require("express");

const router = express.Router();
const questionControllers = require("./controllers/questionControllers");

router.get(
  "/questions/category/:categoryId",
  questionControllers.browseByCategory
);
router.post(
  "/questions/category/:categoryId",
  questionControllers.addByCategory
);

// router.get("/hello", (req, res) => (res.send("hello")))

module.exports = router;
