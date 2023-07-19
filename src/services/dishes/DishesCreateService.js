const AppError = require("../../utils/AppError")

class DishesCreateService {
  constructor(dishesRepository, ingredientsRepository) {
    this.dishesRepository = dishesRepository
    this.ingredientsRepository = ingredientsRepository
  }

  async execute({ name, category, price, description, ingredients }) {
    if (!name || !category || !price || !description || !ingredients) {
      throw new AppError("Informe todos os campos obrigatórios.")
    }

    const dish = await this.dishesRepository.insert({
      name,
      category,
      price,
      description
    })

    if (ingredients.length > 0) {
      const insertIngredients = ingredients.map(ingredient => {
        return {
          name: ingredient.trim(),
          dish_id: dish.id
        }
      })

      insertIngredients.forEach(ingredient => {
        this.ingredientsRepository.insert(ingredient)
      })
    }

    return {
      ...dish,
      ingredients
    }
  }
}

module.exports = DishesCreateService