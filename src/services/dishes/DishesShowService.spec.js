const DishesShowService = require("./DishesShowService")
const DishesRepositoryInMemory = require("../../repositories/dishes/DishesRepositoryInMemory")

describe.only("DishesShowService", () => {
  let dishesShowService
  let dishesRepositoryInMemory

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    dishesShowService = new DishesShowService(dishesRepositoryInMemory)
  })

  const dishID = 1

  it("Should be able to show a dish", async () => {
    const dish = await dishesShowService.execute(dishID)

    expect(dish).toHaveProperty("id")
    expect(dish.name).toBe("Salada Example")
  })
})