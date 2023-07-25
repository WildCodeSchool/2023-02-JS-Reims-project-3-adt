const AbstractManager = require("./AbstractManager");

class AnswerManager extends AbstractManager {
  constructor() {
    super({ table: "answer" });
  }

  insert(answer) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, question_id, response) VALUES (?, ?, ?)`,
      [answer.user_id, answer.question_id, answer.response]
    );
  }

  findAllWithQuestionDetails() {
    return this.database.query(`
      SELECT answer.*, question.*
      FROM ${this.table}
      JOIN question ON answer.question_id = question.id
      WHERE answer.response IS NOT NULL
    `);
  }

  getAllByUserId(userId) {
    return this.database.query(
      `SELECT answer.*, question.*
      FROM ${this.table}
      JOIN question ON answer.question_id = question.id
      WHERE answer.user_id = ?`,
      [userId]
    );
  }
}

module.exports = AnswerManager;
