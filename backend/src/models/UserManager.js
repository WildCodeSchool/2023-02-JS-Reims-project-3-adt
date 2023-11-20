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
      `select id, email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table}`
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email= ?, hashedPassword = ?, firstname = ?, lastname = ?, phone_number = ? where id = ?`,
      [
        user.email,
        user.hashedPassword,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.id,
      ]
    );
  }

  delete(user) {
    return this.database.query(`delete from ${this.table} where email = ?`, [
      user.id,
    ]);
  }
}

module.exports = UserManager;
