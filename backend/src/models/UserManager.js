const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.database.query(
      `select id, username, email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, username, email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table}`
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, email, hashedPassword, firstname, lastname, phone_number, company_name, is_admin) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
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

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, email= ?, hashedPassword = ? where id = ?, set firstname =?, set lastname = ?, set phone_number = ?, set company_name = ?, set is_admin = ?`,
      [
        user.username,
        user.email,
        user.hashedPassword,
        user.id,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.company_name,
        user.is_admin,
      ]
    );
  }
}

module.exports = UserManager;
