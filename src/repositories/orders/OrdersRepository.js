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
}

module.exports = OrdersRepository