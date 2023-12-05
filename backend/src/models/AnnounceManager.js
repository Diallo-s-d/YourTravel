const AbstractManager = require("./AbstractManager");

class AnnounceManager extends AbstractManager {
  constructor() {
    super({ table: "announce" });
  }

  // SEARCHBAR
  searchBar(searchTerm) {
    return this.database.query(
      `SELECT  announce.announce_id,continent.continent_name, country.country_name,announce.image, announce.price
      FROM announce 
      JOIN continent ON announce.continent_id = continent.continent_id
      JOIN country  ON announce.country_id = country.country_id
      WHERE continent.continent_name LIKE ? OR country.country_name LIKE ?`,
      [`%${searchTerm}%`, `%${searchTerm}%`]
    );
  }

  selectAll(announce) {
    return this.database.query(
      `SELECT  announce.announce_id, continent.continent_name, country.country_name, announce.image, announce.price
      FROM announce 
      JOIN continent ON announce.continent_id = continent.continent_id
      JOIN country  ON announce.country_id = country.country_id `,
      [announce]
    );
  }

  getTravelDetailsAll(id) {
    return this.database.query(
      `SELECT  announce.announce_id, continent.continent_name, country.country_name, announce.image, announce.price, announce.title, announce.description, announce.activity
      FROM announce 
      JOIN continent ON announce.continent_id = continent.continent_id
      JOIN country  ON announce.country_id = country.country_id
      WHERE announce.announce_id = ?`,
      [id]
    );
  }
}

module.exports = AnnounceManager;
