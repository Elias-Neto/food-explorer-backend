const OrdersIndexService = require("./OrdersIndexService")
const OrdersCreateService = require("./OrdersCreateService")
const OrdersRepositoryInMemory = require("../../repositories/orders/OrdersRepositoryInMemory")

describe("OrdersIndexService", () => {
  let ordersIndexService
  let ordersCreateService
  let ordersRepositoryInMemory

  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    ordersIndexService = new OrdersIndexService(ordersRepositoryInMemory)
    ordersCreateService = new OrdersCreateService(ordersRepositoryInMemory)
  })

  const requestBody = {
    userID: 1,
    dishID: 1,
    quantity: 1,
  }

  it("Order should be returned by User ID", async () => {
    await ordersCreateService.execute(requestBody)

    const orders = await ordersIndexService.execute(requestBody.userID)

    expect(orders[0]).toHaveProperty("dish_id")
  })
})