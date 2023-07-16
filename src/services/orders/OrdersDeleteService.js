class OrdersDeleteService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository
  }

  async execute(orderID) {
    await this.ordersRepository.delete(orderID)

    return { message: 'Order deleted successfully' }
  }
}

module.exports = OrdersDeleteService