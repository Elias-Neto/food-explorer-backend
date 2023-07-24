const AppError = require("../../utils/AppError")

class DishesUpdateService {
  constructor(dishesRepository, ingredientsRepository) {
    this.dishesRepository = dishesRepository
    this.ingredientsRepository = ingredientsRepository
  }

  async execute(dishID, { name, category, price, description, ingredients }) {
    const dish = await this.dishesRepository.findByID(dishID)

    if (!dish) {
      throw new AppError('Prato não encontrado.', 404)
    }

    if (!name || !category || !price || !description || !ingredients) {
      throw new AppError("Informe todos os campos obrigatórios.")
    }

    const dishUpdated = await this.dishesRepository.update(dishID, {
      name,
      category,
      price,
      description
    })

    if (ingredients.length > 0) {
      await this.ingredientsRepository.deleteByDishID(dishID)

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
      ...dishUpdated,
      ingredients
    }
  }
}

module.exports = DishesUpdateService