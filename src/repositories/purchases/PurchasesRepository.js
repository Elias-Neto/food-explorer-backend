const knex = require("../../database/knex")
const UsersRepository = require("../users/UsersRepository")

class PurchasesRepository {
  async findByID(purchaseID) {
    const purchase = await knex("purchases").where({ id: purchaseID }).first()

    return purchase
  }

  async insert(purchase) {
    const [id] = await knex("purchases").insert(purchase)

    return this.findByID(id)
  }

  async fetchAll(userID) {
    const userRepository = new UsersRepository()
    const user = await userRepository.findByID(userID)

    if (user.isAdmin === 1) {
      return await knex("purchases")
    } else {
      return await knex("purchases").where({ user_id: userID })
    }
  }

  async update(purchaseID, status) {
    const purchase = await this.findByID(purchaseID)

    const updatedPurchase = { ...purchase, status }

    await knex("purchases").where({ id: purchase.id }).update(updatedPurchase)

    return this.findByID(purchase.id)
  }
}

module.exports = PurchasesRepository