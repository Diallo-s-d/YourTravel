const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(userId, announceId) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, announce_id) VALUES (?,?)`,
      [userId, announceId]
    );
  }

  searchByUserAndAnnounce(userId, announceId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ? AND announce_id = ?`,
      [userId, announceId]
    );
  }

  deleteAnnounce(userId, announceId) {
    return this.database.query(
      `DELETE FROM favorite WHERE user_id = ? AND announce_id = ?`,
      [userId, announceId]
    );
  }
}

module.exports = FavoriteManager;
