class OrdersCreateService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository
  }

  async execute({ userID, dishID, quantity }) {
    const order = await this.ordersRepository.insert({
      user_id: userID,
      dish_id: dishID,
      quantity
    })

    return order
  }
}

module.exports = OrdersCreateService