const FavoritesRepository = require("../repositories/favorites/FavoritesRepository")
const FavoritesIndexService = require("../services/favorites/FavoritesIndexService")
const FavoritesDeleteService = require("../services/favorites/FavoritesDeleteService")
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

  async delete(request, response) {
    const { favoriteID } = request.params

    const favoritesRepository = new FavoritesRepository()
    const favoritesDeleteService = new FavoritesDeleteService(favoritesRepository)

    await favoritesDeleteService.execute(favoriteID)

    return response.status(204).send()
  }
}

module.exports = FavoritesController