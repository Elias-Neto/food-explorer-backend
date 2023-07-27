class FavoritesRepositoryInMemory {
  favorites = [
    {
      id: 1,
      user_id: 1,
      dish_id: 1
    }
  ]

  async findByID(favoriteID) {
    const favorite = this.favorites.find((favorite) => favorite.id === favoriteID)

    return favorite
  }

  async findByUserID(userID) {
    const favorites = this.favorites.filter((favorite) => favorite.user_id === userID)

    return favorites
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

  async delete(favoriteID) {
    this.favorites = this.favorites.filter((favorite) => favorite.id !== favoriteID)
  }
}

module.exports = FavoritesRepositoryInMemory