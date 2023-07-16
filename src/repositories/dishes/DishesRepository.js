const knex = require("../../database/knex")

class DishesRepository {
  async findByID(dishID) {
    const dish = await knex("dishes").where({ id: dishID }).first()

    return dish
  }

  async insert(dish) {
    const [id] = await knex("dishes").insert(dish)

    return this.findByID(id)
  }
}

module.exports = DishesRepository