const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { hashPassword } = require("./services/auth");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", hashPassword, userControllers.destroy);

const questionControllers = require("./controllers/questionControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get(
  "/categories/:categoryId/questions",
  questionControllers.browseByCategory
);
router.get("/categories", categoryControllers.browse);

router.post(
  "/categories/:categoryId/questions",
  questionControllers.addByCategory
);

//    USERS

router.get(
  "/users/:userId/users",
  userControllers.getUserByEmailWithPasswordAndPassToNext
);

router.post(
  "/users/:userId/users",
  userControllers.addUserByEmailWithPasswordAndPassToNext
);

module.exports = router;
