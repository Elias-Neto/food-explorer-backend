const UsersRepository = require('../repositories/users/UsersRepository')
const SessionsCreateService = require("../services/sessions/SessionsCreateService")

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    const usersRepository = new UsersRepository()
    const sessionsCreateService = new SessionsCreateService(usersRepository)

    const { user, token } = await sessionsCreateService.execute({
      email,
      password,
    })

    return response.status(201).json({ user, token })
  }
}

module.exports = SessionsController