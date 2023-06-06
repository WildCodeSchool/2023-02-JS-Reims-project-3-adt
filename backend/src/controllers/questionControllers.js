const QuestionManager = require("../models/QuestionManager");

const questionManager = new QuestionManager();

const browseByCategory = (req, res) => {
  const { categoryId } = req.params;

  questionManager
    .getAllByCategory(categoryId)
    .then((questions) => {
      res.json(questions);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const addByCategory = (req, res) => {
  const newQuestion = req.body;

  questionManager
    .insert(newQuestion)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getAllByCategory = (req, res) => {
  const { categoryId } = req.params;

  questionManager
    .getAllByCategory(categoryId) // Utilisation de la méthode correcte getAllByCategory
    .then((questions) => {
      res.json(questions);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browseByCategory,
  addByCategory,
  getAllByCategory,
};
