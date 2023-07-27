const FavoritesRepository = require("../repositories/favorites/FavoritesRepository")
const FavoritesIndexService = require("../services/favorites/FavoritesIndexService")
const FavoritesCreateService = require("../services/favorites/FavoritesCreateService")

class FavoritesController {
  async create(request, response) {
    const { dishID } = request.body
    const { id: userID } = request.user

    const favoritesRepository = new FavoritesRepository()
    const favoritesCreateService = new FavoritesCreateService(favoritesRepository)

      ("dishID", dishID)
      ("userID", userID)

    const favorite = await favoritesCreateService.execute(Number(userID), dishID)

    return response.status(201).json(favorite)
  }

  async index(request, response) {
    const { id: userID } = request.user

    const favoritesRepository = new FavoritesRepository()
    const favoritesIndexService = new FavoritesIndexService(favoritesRepository)

    const favorites = await favoritesIndexService.execute(Number(userID))

    return response.json(favorites)
  }
}

module.exports = FavoritesController