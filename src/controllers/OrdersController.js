const OrdersRepository = require("../repositories/orders/OrdersRepository")
const OrdersCreateService = require("../services/orders/OrdersCreateService")

class OrdersController {
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
}

module.exports = OrdersController