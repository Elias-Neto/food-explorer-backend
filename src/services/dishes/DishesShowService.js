class DishesShowService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute(dishID) {
    const dish = await this.dishesRepository.findByID(dishID)

    return dish
  }
}

module.exports = DishesShowService