const PurchasesIndexService = require("./PurchasesIndexService")
const PurchasesRepositoryInMemory = require("../../repositories/purchases/PurchasesRepositoryInMemory")

describe.only("PurchasesIndexService", () => {
  let purchasesIndexService
  let purchasesRepositoryInMemory

  beforeEach(() => {
    purchasesRepositoryInMemory = new PurchasesRepositoryInMemory()
    purchasesIndexService = new PurchasesIndexService(purchasesRepositoryInMemory)
  })

  const userAdminID = 1
  const userID = 2

  it("Should be able to list all purchases of user", async () => {
    const purchases = await purchasesIndexService.execute(userID)

    expect(purchases).toHaveLength(1)
  })

  it("Should be able to list all purchases", async () => {
    const purchases = await purchasesIndexService.execute(userAdminID)

    expect(purchases).toHaveLength(2)
  })
})