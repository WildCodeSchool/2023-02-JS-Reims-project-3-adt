const QuestionManager = require("../models/questionManager");

const questionManager = new QuestionManager();

const browseByFamily = (req, res) => {
  const { familyId } = req.params;

  questionManager
    .findByFamily(familyId)
    .then((questions) => {
      res.json(questions);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const addByFamily = (req, res) => {
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

const getAllByFamily = (req, res) => {
  const { familyId } = req.params;

  questionManager
    .getAllByFamily(familyId)
    .then((questions) => {
      res.json(questions);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browseByFamily,
  addByFamily,
  getAllByFamily,
};
