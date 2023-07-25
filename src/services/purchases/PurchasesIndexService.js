class PurchasesIndexService {
  constructor(purchaseRepository) {
    this.purchaseRepository = purchaseRepository
  }

  async execute(userID) {
    const purchases = await this.purchaseRepository.fetchAll(userID)

    return purchases
  }
}

module.exports = PurchasesIndexService