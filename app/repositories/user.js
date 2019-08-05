const db = require('../db');

module.exports = class UserRepository {
  constructor() {
    this.table = db.get('users');
  }

  create({ identifier, telegramId }) {
    const user = this.find(identifier);

    if (user) {
      return user;
    }

    this.table
      .push({ identifier, telegramId })
      .write();

    return this.find(telegramId);
  }

  find(identifier) {
    return this.table.find({ identifier }).value();
  }
};
