const FavoritesRepository = require("../repositories/favorites/FavoritesRepository")
const FavoritesCreateService = require("../services/favorites/FavoritesCreateService")

class FavoritesController {
  async create(request, response) {
    const { dishID } = request.body
    const { id: userID } = request.user

    const favoritesRepository = new FavoritesRepository()
    const favoritesCreateService = new FavoritesCreateService(favoritesRepository)

    console.log("dishID", dishID)
    console.log("userID", userID)

    const favorite = await favoritesCreateService.execute(Number(userID), dishID)

    return response.status(201).json(favorite)
  }
}

module.exports = FavoritesController