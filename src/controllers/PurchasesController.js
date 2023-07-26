const OrdersRepository = require("../repositories/orders/OrdersRepository")
const PurchasesRepository = require("../repositories/purchases/PurchasesRepository")
const PurchasesIndexService = require("../services/purchases/PurchasesIndexService")
const PurchasesCreateService = require("../services/purchases/PurchasesCreateService")
const PurchasesUpdateService = require("../services/purchases/PurchasesUpdateService")

class PurchasesController {
  async create(request, response) {
    const { id: userID } = request.user

    const ordersRepository = new OrdersRepository()
    const purchasesRepository = new PurchasesRepository()
    const purchasesCreateService = new PurchasesCreateService(purchasesRepository, ordersRepository)

    const purchase = await purchasesCreateService.execute({ userID })

    return response.status(201).json(purchase)
  }

  async index(request, response) {
    const { id: userID } = request.user

    const purchasesRepository = new PurchasesRepository()
    const purchasesIndexService = new PurchasesIndexService(purchasesRepository)

    const purchases = await purchasesIndexService.execute(Number(userID))

    return response.json(purchases)
  }

  async update(request, response) {
    const { purchaseID } = request.params
    const { status } = request.body

    const purchasesRepository = new PurchasesRepository()
    const purchasesUpdateService = new PurchasesUpdateService(purchasesRepository)

    await purchasesUpdateService.execute(Number(purchaseID), status)

    return response.status(204).send()
  }
}

module.exports = PurchasesController