const knex = require("../../database/knex")

class UserRepository {
  async insert({ name, email, password, isAdmin }) {
    const [userID] = await knex("users").insert({
      name,
      email,
      password,
      isAdmin: isAdmin ? true : false,
    })

    return this.findByID(userID)
  }

  async findByID(userID) {
    const user = await knex("users").where({ id: userID }).first()

    return user
  }

  async findByEmail(email) {
    const user = await knex("users").where({ email }).first()

    return user
  }
}

module.exports = UserRepository
