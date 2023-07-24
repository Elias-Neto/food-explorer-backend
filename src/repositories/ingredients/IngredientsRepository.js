const knex = require("../../database/knex")

class IngredientsRepository {
  async findByID(ingredientID) {
    const ingredient = await knex("ingredients").where({ id: ingredientID }).first()

    return ingredient
  }

  async insert(ingredient) {
    const [ingredientID] = await knex("ingredients").insert(ingredient)

    return this.findByID(ingredientID)
  }

  async deleteByDishID(dishID) {
    await knex("ingredients").where({ dish_id: dishID }).del()
  }
}

module.exports = IngredientsRepository