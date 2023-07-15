const AppError = require("../../utils/AppError")
const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../../repositories/users/UsersRepositoryInMemory")

describe("UserCreateService", () => {
  let userCreateService
  let userRepositoryInMemory

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    userCreateService = new UserCreateService(userRepositoryInMemory)
  })

  it("User should be create", async () => {
    const user = {
      name: "User Test",
      email: "user@teste.com",
      password: "123456",
    }

    const userCreated = await userCreateService.execute(user)

    expect(userCreated).toHaveProperty("id")
  })

  it("User not should be create with some field null", async () => {
    const user = {
      // name: "User Test",
      email: "user@teste.com",
      password: "123456",
    }

    await expect(userCreateService.execute(user)).rejects.toEqual(
      new AppError("Informe todos os campos.")
    )
  })

  it("User not should be create with password less than 6 characters", async () => {
    const user = {
      name: "User Test",
      email: "user@teste.com",
      password: "123",
    }

    await expect(userCreateService.execute(user)).rejects.toEqual(
      new AppError("A senha deve ter no mínimo 6 caracteres.")
    )
  })

  it("User not should be create with exists email", async () => {
    const user1 = {
      name: "User Test One",
      email: "user@teste.com",
      password: "123456",
    }

    const user2 = {
      name: "User Test Two",
      email: "user@teste.com",
      password: "123456",
    }

    await userCreateService.execute(user1)

    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este e-mail já está em uso.", 409)
    )
  })
})
