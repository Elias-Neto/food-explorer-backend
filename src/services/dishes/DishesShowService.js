class DishesShowService {
  constructor(dishesRepository, ingredientsRepository) {
    this.dishesRepository = dishesRepository
    this.ingredientsRepository = ingredientsRepository
  }

  async execute(dishID) {
    const dish = await this.dishesRepository.findByID(dishID)

    const ingredients = await this.ingredientsRepository.findByDishID(dishID)

    return {
      ...dish,
      ingredients
    }
  }
}

module.exports = DishesShowService