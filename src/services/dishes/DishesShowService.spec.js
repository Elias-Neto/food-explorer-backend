const DishesShowService = require("./DishesShowService")
const DishesRepositoryInMemory = require("../../repositories/dishes/DishesRepositoryInMemory")
const IngredientsRepositoryInMemory = require("../../repositories/ingredients/IngredientsRepositoryInMemory")


describe("DishesShowService", () => {
  let dishesShowService
  let dishesRepositoryInMemory
  let ingredientsRepositoryInMemory

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    ingredientsRepositoryInMemory = new IngredientsRepositoryInMemory()
    dishesShowService = new DishesShowService(dishesRepositoryInMemory, ingredientsRepositoryInMemory)
  })

  const dishID = 1

  it("Should be able to show a dish", async () => {
    const dish = await dishesShowService.execute(dishID)

    expect(dish).toHaveProperty("id")
    expect(dish.name).toBe("Salada Example")
    expect(dish).toHaveProperty("ingredients")
  })
})