const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, email, password, firstname, lastname, phone_number, company_name) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
        user.email,
        user.password,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.company_name,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, email= ?, password = ? where id = ?, set firstname =?, set lastname = ?, set phone_number = ?, set company_name = ?`,
      [
        user.username,
        user.email,
        user.password,
        user.id,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.company_name,
      ]
    );
  }
}

module.exports = UserManager;
