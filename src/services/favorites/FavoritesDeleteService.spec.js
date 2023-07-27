const FavoritesDeleteService = require("./FavoritesDeleteService")
const FavoritesRepositoryInMemory = require("../../repositories/favorites/FavoritesRepositoryInMemory")

describe("FavoritesDeleteService", () => {
  let favoritesDeleteService
  let favoritesRepositoryInMemory

  beforeEach(() => {
    favoritesRepositoryInMemory = new FavoritesRepositoryInMemory()
    favoritesDeleteService = new FavoritesDeleteService(favoritesRepositoryInMemory)
  })

  const favoriteID = 1

  it("should be able to delete a favorite", async () => {
    const response = await favoritesDeleteService.execute(favoriteID)

    expect(response).toHaveProperty("message", "Dish deleted successfully")
  })
})