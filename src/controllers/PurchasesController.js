const OrdersRepository = require("../repositories/orders/OrdersRepository")
const PurchasesRepository = require("../repositories/purchases/PurchasesRepository")
const PurchasesCreateService = require("../services/purchases/PurchasesCreateService")

class PurchasesController {
  async create(request, response) {
    const { id: userID } = request.user

    const ordersRepository = new OrdersRepository()
    const purchasesRepository = new PurchasesRepository()
    const purchasesCreateService = new PurchasesCreateService(purchasesRepository, ordersRepository)

    const purchase = await purchasesCreateService.execute({ userID })

    return response.status(201).json(purchase)
  }
}

module.exports = PurchasesController