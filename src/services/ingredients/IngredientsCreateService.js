const AppError = require("../../utils/AppError")

class IngredientsCreateService {
  constructor(ingredientsRepository, dishesRepository) {
    this.ingredientsRepository = ingredientsRepository
    this.dishesRepository = dishesRepository
  }

  async execute({ name, dishID }) {
    const ingredient = await this.ingredientsRepository.insert({
      name,
      dishID,
    })

    return ingredient
  }
}

module.exports = IngredientsCreateService