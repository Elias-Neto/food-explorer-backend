const knex = require("../../database/knex")

class FavoritesRepository {
  async findByID(id) {
    const favorite = await knex("favorites").where({ id }).first()

    return favorite
  }

  async insert(favorite) {
    console.log(favorite)
    const [id] = await knex("favorites").insert(favorite)

    return this.findByID(id)
  }
}

module.exports = FavoritesRepository