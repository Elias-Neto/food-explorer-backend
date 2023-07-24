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

  async findAll(search) {
    const dishes = await knex
      .select('d.*')
      .from('dishes as d')
      .join('ingredients as i', 'd.id', 'i.dish_id')
      .whereLike('d.name', `%${search}%`)
      .orWhereLike('i.name', `%${search}%`)
      .groupBy('d.id')

    return dishes
  }

  async update(dishID, dish) {
    const updated_at = knex.fn.now()

    await knex('dishes')
      .update({ ...dish, updated_at })
      .where({ id: dishID })

    return this.findByID(dishID)
  }
}

module.exports = DishesRepository