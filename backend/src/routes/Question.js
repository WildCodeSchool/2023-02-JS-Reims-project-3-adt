const express = require("express");

const router = express.Router();
const Question = require("../app");

router.get("/questions/:family/:category", async (req, res) => {
  const { family } = req.params;
  const { category } = req.params;
  try {
    const questions = await Question.find({
      family,
      category,
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des questions.",
    });
  }
});

router.get("/categories/:family", async (req, res) => {
  const { family } = req.params;
  try {
    const categories = await Question.distinct("category", { family });
    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération des catégories de questions.",
    });
  }
});

module.exports = router;
