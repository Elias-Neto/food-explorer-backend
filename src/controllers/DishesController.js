const DishesRepository = require("../repositories/dishes/DishesRepository")
const DishesCreateService = require("../services/dishes/DishesCreateService")
const IngredientsRepository = require("../repositories/ingredients/IngredientsRepository")

class DishesController {
  async create(request, response) {
    const { name, category, price, description, ingredients } = request.body

    const dishesRepository = new DishesRepository()
    const ingredientsRepository = new IngredientsRepository()
    const dishesCreateService = new DishesCreateService(dishesRepository, ingredientsRepository)

    const dish = await dishesCreateService.execute({
      name,
      category,
      price,
      description,
      ingredients
    })

    return response.status(201).json(dish)
  }
}

module.exports = DishesController