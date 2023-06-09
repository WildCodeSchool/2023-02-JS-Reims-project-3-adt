const models = require("../models");

const browseByCategory = (req, res) => {
  const { categoryId } = req.params;

  models.question
    .getAllByCategory(categoryId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addByCategory = (req, res) => {
  const newQuestion = req.body;

  models.questionManager
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

  models.questionManager
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
