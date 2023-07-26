const PurchasesUpdateService = require("./PurchasesUpdateService")
const PurchasesRepositoryInMemory = require("../../repositories/purchases/PurchasesRepositoryInMemory")

describe("PurchasesUpdateService", () => {
  let purchasesUpdateService
  let purchasesRepositoryInMemory

  beforeEach(() => {
    purchasesRepositoryInMemory = new PurchasesRepositoryInMemory()
    purchasesUpdateService = new PurchasesUpdateService(purchasesRepositoryInMemory)
  })

  const requestBody = {
    status: "preparing",
  }

  const pathParameters = {
    purchaseID: 1
  }


  it("Purchase status should be updated", async () => {
    const purchase = await purchasesUpdateService.execute(pathParameters.purchaseID, requestBody.status)

    expect(purchase.status).toBe(requestBody.status)
  })
})