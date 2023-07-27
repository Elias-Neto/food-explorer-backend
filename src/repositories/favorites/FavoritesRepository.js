const knex = require("../../database/knex")

class FavoritesRepository {
  async findByID(id) {
    const favorite = await knex("favorites").where({ id }).first()

    return favorite
  }

  async findByUserID(userID) {
    const favorites = await knex("favorites").where({ user_id: userID })

    return favorites
  }

  async insert(favorite) {
    (favorite)
    const [id] = await knex("favorites").insert(favorite)

    return this.findByID(id)
  }

  async delete(favoriteID) {
    await knex("favorites").where({ id: favoriteID }).delete()
  }
}

module.exports = FavoritesRepository