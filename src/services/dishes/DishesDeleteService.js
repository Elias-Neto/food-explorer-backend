class DishesDeleteService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute(dishID) {
    await this.dishesRepository.delete(dishID)

    return { message: 'Dish deleted successfully' }
  }
}

module.exports = DishesDeleteService