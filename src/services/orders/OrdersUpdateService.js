class OrdersUpdateService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository
  }

  async execute(orderID, quantity) {
    const orderUpdated = this.ordersRepository.update(orderID, quantity)

    return orderUpdated
  }
}

module.exports = OrdersUpdateService