const express = require("express");

const router = express.Router();
const Question = require("../router");

router.get("/questions/:family", async (req, res) => {
  const { family } = req.params;

  try {
    const questions = await Question.find({ family });
    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des questions.",
    });
  }
});

module.exports = router;
