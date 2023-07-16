const AppError = require("../../utils/AppError")
const DishesCreateService = require("./DishesCreateService")
const DishesRepositoryInMemory = require("../../repositories/dishes/DishesRepositoryInMemory")
const IngredientsRepositoryInMemory = require("../../repositories/ingredients/IngredientsRepositoryInMemory")

describe("DishesCreateService", () => {
  let dishesCreateService
  let dishesRepositoryInMemory
  let ingredientsRepositoryInMemory

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    ingredientsRepositoryInMemory = new IngredientsRepositoryInMemory()
    dishesCreateService = new DishesCreateService(dishesRepositoryInMemory, ingredientsRepositoryInMemory)
  })

  const requestBody = {
    name: "Prato Example",
    category: "Categoria Example",
    price: 10,
    description: "Descrição Example",
    ingredients: ["Ingredient One", "Ingredient Two"]
  }

  it("Dish should be create", async () => {
    const dish = await dishesCreateService.execute(requestBody)

    expect(dish).toHaveProperty("id")
  })

  it("Dish not should be create with some field null", async () => {
    await expect(
      dishesCreateService.execute({})
    ).rejects.toEqual(
      new AppError("Informe todos os campos obrigatórios.")
    )
  })
})
