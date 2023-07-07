const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  getAllCategoryTitle() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = CategoryManager;
