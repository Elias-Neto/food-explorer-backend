class OrdersRepositoryInMemory {
  orders = []

  async findByID(orderID) {
    const order = this.orders.find((order) => order.id === orderID)

    return order
  }

  async insert(order) {
    const insertOrder = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...order
    }

    this.orders.push(insertOrder)

    return this.findByID(insertOrder.id)
  }
}

module.exports = OrdersRepositoryInMemory