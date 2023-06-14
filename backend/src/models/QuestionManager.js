const AbstractManager = require("./AbstractManager");

class QuestionManager extends AbstractManager {
  constructor() {
    super({ table: "question" });
  }

  insert(question) {
    return this.database.query(
      `INSERT INTO ${this.table} (content, category) VALUES (?, ?)`,
      [question.content, question.category]
    );
  }

  update(question) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ?, category = ? WHERE id = ?`,
      [question.content, question.category, question.id]
    );
  }

  getAllByCategory(question) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE category_id = ?`,
      [question]
    );
  }

  findByMandatoryLevel(mandatoryLevel) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE mandatory_level = ?`,
      [mandatoryLevel]
    );
  }
}

module.exports = QuestionManager;
