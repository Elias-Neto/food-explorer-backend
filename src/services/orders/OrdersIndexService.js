class OrdersIndexService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository
  }

  async execute(userID) {
    const orders = await this.ordersRepository.findByUserID(userID)

    const ordersWithSubtotal = orders.map(order => {
      order.subtotal = order.quantity * order.dish_price
      return order
    })

    return ordersWithSubtotal
  }
}

module.exports = OrdersIndexService