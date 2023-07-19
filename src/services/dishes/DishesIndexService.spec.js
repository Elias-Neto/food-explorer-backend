const DishesIndexService = require("./DishesIndexService")
const DishesRepositoryInMemory = require("../../repositories/dishes/DishesRepositoryInMemory")

describe.only("DishesIndexService", () => {
  let dishesIndexService
  let dishesRepositoryInMemory

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    dishesIndexService = new DishesIndexService(dishesRepositoryInMemory)
  })

  const queryParams = {
    search: "Salada",
  }

  it("Should be able to list dishes without search term", async () => {
    const dishes = await dishesIndexService.execute(null)

    expect(dishes).toHaveLength(2)
  })

  it("Should be able to list dishes with search term", async () => {
    const dishes = await dishesIndexService.execute(queryParams.search)

    expect(dishes).toHaveLength(1)
  })
})