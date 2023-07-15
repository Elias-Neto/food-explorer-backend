const AppError = require("../../utils/AppError")
const UserCreateService = require("../users/UserCreateService")
const SessionsCreateService = require("./SessionsCreateService")
const UserRepositoryInMemory = require("../../repositories/users/UsersRepositoryInMemory")

describe("SessionCreateService", () => {
  let userCreateService
  let userRepositoryInMemory

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    userCreateService = new UserCreateService(userRepositoryInMemory)
    sessionsCreateService = new SessionsCreateService(userRepositoryInMemory)
  })

  const requestBody = {
    name: "User Test",
    email: "user@teste.com",
    password: "123456",
  }

  it('Session should be create', async () => {
    await userCreateService.execute(requestBody)

    const response = await sessionsCreateService.execute({
      email: requestBody.email,
      password: requestBody.password
    })

    expect(response).toHaveProperty('token')
    expect(response).toHaveProperty('user')
  })

  it('Should not be able to create a session with invalid email', async () => {
    await expect(
      sessionsCreateService.execute({
        email: 'invalid-email',
        password: '123456'
      })
    ).rejects.toEqual(new AppError("E-mail e/ou senha incorreta.", 401))
  })

  it('Should not be able to create a session with invalid password', async () => {
    await expect(
      sessionsCreateService.execute({
        email: requestBody.email,
        password: 'invalid-password'
      })
    ).rejects.toEqual(new AppError("E-mail e/ou senha incorreta.", 401))
  })
})