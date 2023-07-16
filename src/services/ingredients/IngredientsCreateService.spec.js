const AppError = require("../../utils/AppError")
const IngredientsCreateService = require("./IngredientsCreateService")
const IngredientsRepositoryInMemory = require("../../repositories/ingredients/IngredientsRepositoryInMemory")

describe("IngredientsCreateService", () => {
  let ingredientsCreateService
  let ingredientsRepositoryInMemory

  beforeEach(() => {
    ingredientsRepositoryInMemory = new IngredientsRepositoryInMemory()
    ingredientsCreateService = new IngredientsCreateService(ingredientsRepositoryInMemory)
  })

  const requestBody = {
    name: "Ingredient Example",
    dish_id: 1,
  }

  const dish = {
    id: 1,
    name: "Prato Example",
    category: "Categoria Example",
    description: "Descrição Example",
    photo: "/images/example.jpg",
    price: 10,
  }

  it("Ingredient should be create", async () => {
    const ingredient = await ingredientsCreateService.execute(requestBody)

    expect(ingredient).toHaveProperty("id")
  })
})
