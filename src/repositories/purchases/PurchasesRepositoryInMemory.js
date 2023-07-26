class PurchasesRepositoryInMemory {
  purchases = [
    {
      id: 1,
      user_id: 1,
      details: "details",
      status: "pending"
    },
    {
      id: 2,
      user_id: 2,
      details: "details",
      status: "pending"
    }
  ]
  users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@email.com",
      password: "123456",
      isAdmin: 1
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@email.com",
      password: "123456",
      isAdmin: 0
    }
  ]

  async findByID(purchaseID) {
    const purchase = this.purchases.find(purchase => purchase.id === purchaseID)

    return purchase
  }

  async insert(purchase) {
    const insertPurchase = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...purchase,
      status: "pending"
    }

    this.purchases.push(insertPurchase)

    return this.findByID(insertPurchase.id)
  }

  async fetchAll(userID) {
    const user = this.users.find(user => user.id === userID)

    if (user.isAdmin === 1) {
      return this.purchases
    } else {
      return this.purchases.filter(purchase => purchase.user_id === userID)
    }
  }

  async update(purchaseID, status) {
    const purchase = await this.findByID(purchaseID)

    const updatedPurchases = this.purchases.map(arrayPurchase => {
      if (arrayPurchase.id === purchaseID) {
        return {
          ...purchase,
          status
        }
      }
    })

    this.purchases = updatedPurchases

    return this.findByID(purchaseID)
  }
}

module.exports = PurchasesRepositoryInMemory