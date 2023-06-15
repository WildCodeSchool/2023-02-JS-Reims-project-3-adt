const models = require("../models");

const browseByTitleCategory = (req, res) => {
  const { categoryTitle } = req.params;

  models.category
    .getAllCategoryTitle(categoryTitle)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseByTitleCategory,
};
