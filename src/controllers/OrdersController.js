const OrdersRepository = require("../repositories/orders/OrdersRepository")
const OrdersIndexService = require("../services/orders/OrdersIndexService")
const OrdersCreateService = require("../services/orders/OrdersCreateService")
const OrdersUpdateService = require("../services/orders/OrdersUpdateService")

class OrdersController {
  // ordersRepository = new OrdersRepository()

  async create(request, response) {
    const { dishID, quantity } = request.body
    const { id: userID } = request.user

    const ordersRepository = new OrdersRepository()
    const ordersCreateService = new OrdersCreateService(ordersRepository)

    const order = await ordersCreateService.execute({
      userID: Number(userID),
      dishID,
      quantity
    })

    return response.status(201).json(order)
  }

  async index(request, response) {
    const { id: userID } = request.user

    const ordersRepository = new OrdersRepository()
    const ordersIndexService = new OrdersIndexService(ordersRepository)

    const orders = await ordersIndexService.execute(Number(userID))

    return response.json(orders)
  }

  async update(request, response) {
    const { quantity } = request.body
    const { orderID } = request.params

    const ordersRepository = new OrdersRepository()
    const ordersUpdateService = new OrdersUpdateService(ordersRepository)

    const order = await ordersUpdateService.execute(Number(orderID), quantity)

    return response.json(order)
  }
}

module.exports = OrdersController