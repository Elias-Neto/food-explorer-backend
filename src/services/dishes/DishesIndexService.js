class DishesIndexService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute(search) {
    const dishes = await this.dishesRepository.findAll(search)

    return dishes
  }
}

module.exports = DishesIndexService