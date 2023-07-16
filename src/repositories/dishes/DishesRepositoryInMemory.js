class DishesRepositoryInMemory {
  dishes = []

  async findByID(dishID) {
    const dish = this.dishes.find((dish) => dish.id === dishID)

    return dish
  }

  async insert(dish) {
    const insertDish = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...dish
    }

    this.dishes.push(insertDish)

    return this.findByID(insertDish.id)
  }
}

module.exports = DishesRepositoryInMemory