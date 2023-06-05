const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const questionControllers = require("./controllers/questionControllers");

const optionBd = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "ADT",
};

router.get("/questions/family/:familyId", questionControllers.browseByFamily);
router.post("/questions/family/:familyId", questionControllers.addByFamily);

router.get(
  "/questions/category/:categoryId",
  questionControllers.browseByCategory
);
router.post(
  "/questions/category/:categoryId",
  questionControllers.addByCategory
);

module.exports = router;
