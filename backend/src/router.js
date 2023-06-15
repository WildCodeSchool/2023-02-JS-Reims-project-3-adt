const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

const questionControllers = require("./controllers/questionControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get(
  "/categories/:categoryId/questions",
  questionControllers.browseByCategory
);
router.get("/categories/title", categoryControllers.browseByTitleCategory);

router.post(
  "/categories/:categoryId/questions",
  questionControllers.addByCategory
);

module.exports = router;
