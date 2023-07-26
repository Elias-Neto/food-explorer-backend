const OrdersUpdateService = require("./OrdersUpdateService")
const OrdersCreateService = require("./OrdersCreateService")
const OrdersRepositoryInMemory = require("../../repositories/orders/OrdersRepositoryInMemory")

describe("OrdersUpdateService", () => {
  let ordersUpdateService
  let ordersCreateService
  let ordersRepositoryInMemory

  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    ordersUpdateService = new OrdersUpdateService(ordersRepositoryInMemory)
    ordersCreateService = new OrdersCreateService(ordersRepositoryInMemory)
  })

  const requestBody = {
    quantity: 3,
  }

  const createOrder = {
    userID: 1,
    dishID: 1,
    quantity: 1,
  }

  it("Order quantity should be updated", async () => {
    const { id: orderID } = await ordersCreateService.execute(createOrder)

    const order = await ordersUpdateService.execute(orderID, requestBody.quantity)

    expect(order.quantity).toBe(requestBody.quantity)
  })
})