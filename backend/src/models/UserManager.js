const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert() {
    return this.database.query(`insert into ${this.table} () values ()`);
  }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  find(id) {
    return this.database.query(
      `select email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table}`
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email= ?, hashedPassword = ? where id = ?`,
      [user.email, user.hashedPassword, user.id]
    );
  }
}

module.exports = UserManager;
