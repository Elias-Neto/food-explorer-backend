const knex = require("../../database/knex")

class PurchasesRepository {
  async findByID(purchaseID) {
    const purchase = await knex("purchases").where({ id: purchaseID }).first()

    return purchase
  }

  async insert(purchase) {
    const [id] = await knex("purchases").insert(purchase)

    return this.findByID(id)
  }
}

module.exports = PurchasesRepository