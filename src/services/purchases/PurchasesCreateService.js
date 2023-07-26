class PurchasesCreateService {
  constructor(purchasesRepository, ordersRepository) {
    this.purchasesRepository = purchasesRepository
    this.ordersRepository = ordersRepository
  }

  async execute({ userID }) {
    const userOrders = await this.ordersRepository.fetchByUserID(userID)

    const ordersWithSubTotal = userOrders.map((order) => {
      return { ...order, subTotal: order.dishPrice * order.quantity }
    })

    const reducedDetails = ordersWithSubTotal.reduce(
      (acc, item) => acc + `${item.quantity} x ${item.dishName}, `,
      ''
    )

    const purchase = await this.purchasesRepository.insert({
      user_id: userID,
      details: reducedDetails.slice(0, -2),
    })

    await this.ordersRepository.deleteByUserID(userID)

    return purchase
  }
}

module.exports = PurchasesCreateService