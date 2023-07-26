class PurchasesUpdateService {
  constructor(purchasesRepository) {
    this.purchasesRepository = purchasesRepository
  }

  async execute(orderID, status) {
    const purchase = await this.purchasesRepository.update(orderID, status)

    return purchase
  }
}

module.exports = PurchasesUpdateService