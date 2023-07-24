const AppError = require("../../utils/AppError")

const DishesUpdateService = require("./DishesUpdateService")
const DishesRepositoryInMemory = require("../../repositories/dishes/DishesRepositoryInMemory")
const IngredientsRepositoryInMemory = require("../../repositories/ingredients/IngredientsRepositoryInMemory")

describe("DishesUpdateService", () => {
  let dishesUpdateService
  let dishesRepositoryInMemory
  let ingredientsRepositoryInMemory

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    ingredientsRepositoryInMemory = new IngredientsRepositoryInMemory()
    dishesUpdateService = new DishesUpdateService(dishesRepositoryInMemory, ingredientsRepositoryInMemory)
  })

  const dishID = 1
  const dish = {
    name: "Salada Example UPDATED",
    category: "salad",
    price: 10,
    description: "Descrição Example",
    ingredients: ["Ingredient One 1 UPDATED", "Ingredient Two 1 UPDATED"]
  }

  it("Should be able to update a dish", async () => {
    const updatedDish = await dishesUpdateService.execute(dishID, dish)

    expect(updatedDish.name).toBe(dish.name)
    expect(updatedDish.ingredients).toBe(dish.ingredients)
  })

  it("Should not be able to update a dish that does not exist", async () => {
    const dishID = 67

    await expect(
      dishesUpdateService.execute(dishID, dish)
    ).rejects.toEqual(
      new AppError('Prato não encontrado.', 404)
    )
  })

  it("Should not be able to update a dish with some field null", async () => {
    await expect(
      dishesUpdateService.execute(dishID, {})
    ).rejects.toEqual(
      new AppError("Informe todos os campos obrigatórios.")
    )
  })
})