const AppError = require("../../utils/AppError")
const { hash } = require("bcryptjs")

class UserCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password, isAdmin }) {
    if (!name || !email || !password) {
      throw new AppError("Informe todos os campos.")
    }

    if (password.length < 6) {
      throw new AppError("A senha deve ter no mínimo 6 caracteres.")
    }

    const emailInUse = await this.usersRepository.findByEmail(email)

    if (emailInUse) {
      throw new AppError("Este e-mail já está em uso.", 409)
    }

    const hashedPassword = await hash(password, 10)

    const user = await this.usersRepository.insert({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    })

    return user
  }
}

module.exports = UserCreateService
