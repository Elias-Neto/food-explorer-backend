const DishesDeleteService = require("./DishesDeleteService")
const DishesRepositoryInMemory = require("../../repositories/dishes/DishesRepositoryInMemory")

describe("DishesDeleteService", () => {
  let dishesDeleteService
  let dishesRepositoryInMemory

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    dishesDeleteService = new DishesDeleteService(dishesRepositoryInMemory)
  })

  const dishID = 1

  it("Should be able to delete a dish", async () => {
    const response = await dishesDeleteService.execute(dishID)

    expect(response).toHaveProperty("message", "Dish deleted successfully")
  })
})