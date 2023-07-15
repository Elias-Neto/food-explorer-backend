const AppError = require("../../utils/AppError")
const { sign } = require("jsonwebtoken")
const { compare } = require("bcryptjs")

const authConfig = require("../../configs/auth")

class SessionsCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ email, password }) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta.", 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta.", 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    })

    return {
      user,
      token,
    }
  }
}

module.exports = SessionsCreateService
