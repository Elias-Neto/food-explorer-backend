const OrdersCreateService = require("./OrdersCreateService")
const OrdersRepositoryInMemory = require("../../repositories/orders/OrdersRepositoryInMemory")

describe("OrdersCreateService", () => {
  let ordersCreateService
  let ordersRepositoryInMemory

  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    ordersCreateService = new OrdersCreateService(ordersRepositoryInMemory)
  })

  const requestBody = {
    userID: 1,
    dishID: 1,
    quantity: 1,
  }

  it("Order should be create", async () => {
    const order = await ordersCreateService.execute(requestBody)

    expect(order).toHaveProperty("id")
  })
})