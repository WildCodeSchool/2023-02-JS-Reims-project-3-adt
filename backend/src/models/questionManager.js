const AbstractManager = require("./AbstractManager");

class QuestionManager extends AbstractManager {
  constructor() {
    super({ table: "question" });
  }

  insert(question) {
    return this.database.query(
      `INSERT INTO ${this.table} (text, family, category) VALUES (?, ?, ?)`,
      [question.text, question.family, question.category]
    );
  }

  update(question) {
    return this.database.query(
      `UPDATE ${this.table} SET text = ?, family = ?, category = ? WHERE id = ?`,
      [question.text, question.family, question.category, question.id]
    );
  }

  findByFamily(family) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE family = ?`, [
      family,
    ]);
  }

  findByCategory(category) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE category = ?`,
      [category]
    );
  }
}

module.exports = QuestionManager;
