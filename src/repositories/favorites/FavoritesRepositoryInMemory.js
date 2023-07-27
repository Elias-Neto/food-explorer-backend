class FavoritesRepositoryInMemory {
  favorites = []

  async findByID(id) {
    const favorite = this.favorites.find((favorite) => favorite.id === id)

    return favorite
  }

  async insert(favorite) {
    const insertFavorite = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...favorite
    }

    await this.favorites.push(insertFavorite)

    const insertedFavorite = await this.findByID(insertFavorite.id)

    return insertedFavorite
  }
}

module.exports = FavoritesRepositoryInMemory