class FavoritesCreateService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository
  }

  async execute(userID, dishID) {
    const favorite = await this.favoritesRepository.insert({ user_id: userID, dish_id: dishID })

    return favorite
  }
}

module.exports = FavoritesCreateService