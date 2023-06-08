const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

const questionControllers = require("./controllers/questionControllers");

router.get(
  "/questions/category/:categoryId",
  questionControllers.browseByCategory
);
router.post(
  "/questions/category/:categoryId",
  questionControllers.addByCategory
);

module.exports = router;
