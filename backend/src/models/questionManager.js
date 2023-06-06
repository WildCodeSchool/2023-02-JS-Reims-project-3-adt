const AbstractManager = require("./AbstractManager");

class QuestionManager extends AbstractManager {
  constructor() {
    super({ table: "question" });
  }

  insert(question) {
    return this.database.query(
      `INSERT INTO ${this.table} (content, category) VALUES (?, ?)`,
      [question.content, question, question.category]
    );
  }

  update(question) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ?, category = ? WHERE id = ?`,
      [question.content, question.category, question.id]
    );
  }

  getAllByCategory(category) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE category = ?`,
      [category]
    );
  }

  findByMandatory_level(mandatoryLevel) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE mandatory_level = ?`,
      [mandatoryLevel]
    );
  }
}

module.exports = QuestionManager;
