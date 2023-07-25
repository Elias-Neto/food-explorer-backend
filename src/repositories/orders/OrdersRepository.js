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

  async fetchByUserID(userID) {
    const orders = await knex('orders')
      .select([
        'orders.id',
        'orders.quantity',
        'dishes.id as dishID',
        'dishes.name as dishName',
        'dishes.price as dishPrice',
        'dishes.photo as dishPhoto',
      ])
      .innerJoin('dishes', 'dishes.id', 'orders.dish_id')
      .where({ user_id: userID })

    return orders
  }

  async update(orderID, quantity) {
    const order = await this.findByID(orderID)

    const orderUpdated = { ...order, quantity }

    await knex("orders").where({ id: order.id }).update(orderUpdated)

    return this.findByID(order.id)
  }

  async delete(orderID) {
    await knex("orders").where({ id: orderID }).delete()
  }

  async deleteByUserID(userID) {
    await knex("orders").where({ user_id: userID }).delete()
  }
}

module.exports = OrdersRepository