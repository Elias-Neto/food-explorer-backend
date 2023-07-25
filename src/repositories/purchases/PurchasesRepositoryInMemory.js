class PurchasesRepositoryInMemory {
  purchases = []

  async findByID(purchaseID) {
    const purchase = this.purchases.find(purchase => purchase.id === purchaseID)

    return purchase
  }

  async insert(purchase) {
    const insertPurchase = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...purchase
    }

    this.purchases.push(insertPurchase)

    return this.findByID(insertPurchase.id)
  }
}

module.exports = PurchasesRepositoryInMemory