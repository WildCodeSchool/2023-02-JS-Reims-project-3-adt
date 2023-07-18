const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (email, hashedPassword, firstname, lastname, phone_number, company_name, is_admin) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.email,
        user.hashedPassword,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.company_name,
        user.is_admin,
      ]
    );
  }

  findAll() {
    return this.database.query(
      `select email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table}`
    );
  }
}

module.exports = UserManager;
