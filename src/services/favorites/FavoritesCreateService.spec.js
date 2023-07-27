const FavoritesCreateService = require("./FavoritesCreateService")
const FavoritesRepositoryInMemory = require("../../repositories/favorites/FavoritesRepositoryInMemory")

describe.only("FavoritesCreateService", () => {
  let favoritesCreateService
  let favoritesRepositoryInMemory

  beforeEach(() => {
    favoritesRepositoryInMemory = new FavoritesRepositoryInMemory()
    favoritesCreateService = new FavoritesCreateService(favoritesRepositoryInMemory)
  })

  const dishID = 1
  const userID = 1

  it("should be able to create a favorite", async () => {
    const favorite = await favoritesCreateService.execute(userID, dishID)

    expect(favorite).toHaveProperty("id")
  })
})