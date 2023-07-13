const UsersRepository = require("../repositories/users/UsersRepository")
const UserCreateService = require("../services/users/UserCreateService")

class UsersController {
  async create(request, response) {
    const { name, email, password, isAdmin } = request.body

    const userRepository = new UsersRepository()
    const userCreateService = new UserCreateService(userRepository)
    const user = await userCreateService.execute({
      name,
      email,
      password,
      isAdmin,
    })

    return response.status(201).json(user)
  }
}

module.exports = UsersController
