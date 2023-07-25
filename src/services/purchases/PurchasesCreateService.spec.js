const PurchasesCreateService = require("./PurchasesCreateService")
const OrdersRepositoryInMemory = require("../../repositories/orders/OrdersRepositoryInMemory")
const PurchasesRepositoryInMemory = require("../../repositories/purchases/PurchasesRepositoryInMemory")

describe("PurchasesCreateService", () => {
  let purchasesCreateService
  let ordersRepositoryInMemory
  let purchasesRepositoryInMemory

  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    purchasesRepositoryInMemory = new PurchasesRepositoryInMemory()
    purchasesCreateService = new PurchasesCreateService(purchasesRepositoryInMemory, ordersRepositoryInMemory)
  })

  const userID = 1

  it("Should be able to create a purchase", async () => {
    const purchase = await purchasesCreateService.execute(userID)

    expect(purchase).toHaveProperty("id")
    expect(purchase.status).toBe("pending")
  })
})