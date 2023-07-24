const OrdersDeleteService = require("./OrdersDeleteService")
const OrdersCreateService = require("./OrdersCreateService")
const OrdersRepositoryInMemory = require("../../repositories/orders/OrdersRepositoryInMemory")

describe("OrdersDeleteService", () => {
  let ordersDeleteService
  let ordersCreateService
  let ordersRepositoryInMemory

  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    ordersDeleteService = new OrdersDeleteService(ordersRepositoryInMemory)
    ordersCreateService = new OrdersCreateService(ordersRepositoryInMemory)
  })

  const createOrder = {
    userID: 1,
    dishID: 1,
    quantity: 1,
  }

  it("Order should be deleted", async () => {
    const { id: orderID } = await ordersCreateService.execute(createOrder)

    const response = await ordersDeleteService.execute(orderID)

    expect(response).toHaveProperty("message")
  })
})