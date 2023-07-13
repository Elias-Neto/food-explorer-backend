class UserRepositoryInMemory {
  users = []

  async insert({ name, email, password, isAdmin }) {
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      email,
      name,
      password,
      isAdmin: isAdmin ? true : false
    }

    this.users.push(user)

    return user
  }

  async findById(id) {
    const user = this.users.find((user) => user.id === id)

    return user
  }

  async findByEmail(email) {
    const user = this.users.find((user) => user.email === email)

    return user
  }
}

module.exports = UserRepositoryInMemory
