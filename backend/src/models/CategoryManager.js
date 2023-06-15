const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  findAllByTitle() {
    return this.database.query(`SELECT title FROM ${this.table}`);
  }
}

module.exports = CategoryManager;
