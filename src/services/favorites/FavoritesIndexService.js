class FavoritesIndexService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository
  }

  async execute(userID) {
    const favorites = await this.favoritesRepository.findByUserID(userID)

    return favorites
  }
}

module.exports = FavoritesIndexService