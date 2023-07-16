const knex = require("../../database/knex")

class OrdersRepository {
  async findByID(orderID) {
    const order = await knex("orders").where({ id: orderID }).first()

    return order
  }

  async insert(order) {
    const [orderID] = await knex("orders").insert(order)

    return this.findByID(orderID)
  }

  async findByUserID(userID) {
    const orders = await knex('orders')
      .select([
        'orders.id',
        'orders.quantity',
        'dishes.id as dish_id',
        'dishes.name as dish_name',
        'dishes.price as dish_price',
        'dishes.photo as dish_photo',
      ])
      .innerJoin('dishes', 'dishes.id', 'orders.dish_id')
      .where({ user_id: userID })

    return orders
  }
}

module.exports = OrdersRepository