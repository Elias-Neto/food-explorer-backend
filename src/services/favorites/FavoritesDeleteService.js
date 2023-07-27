class FavoritesDeleteService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository
  }

  async execute(favoriteID) {
    await this.favoritesRepository.delete(favoriteID)

    return { message: 'Dish deleted successfully' }
  }
}

module.exports = FavoritesDeleteService