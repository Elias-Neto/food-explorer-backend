const FavoritesIndexService = require("./FavoritesIndexService")
const FavoritesRepositoryInMemory = require("../../repositories/favorites/FavoritesRepositoryInMemory")

describe("FavoritesIndexService", () => {
  let favoritesIndexService
  let favoritesRepositoryInMemory

  beforeEach(() => {
    favoritesRepositoryInMemory = new FavoritesRepositoryInMemory()
    favoritesIndexService = new FavoritesIndexService(favoritesRepositoryInMemory)
  })

  const userID = 1

  it("should be able to list a users favorites", async () => {
    const favorites = await favoritesIndexService.execute(userID)

    expect(favorites[0]).toHaveProperty("user_id", userID)
  })
})