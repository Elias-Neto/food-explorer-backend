const DishesShowService = require("../services/dishes/DishesShowService")
const DishesRepository = require("../repositories/dishes/DishesRepository")
const DishesIndexService = require("../services/dishes/DishesIndexService")
const DishesCreateService = require("../services/dishes/DishesCreateService")
const DishesUpdateService = require("../services/dishes/DishesUpdateService")
const DishesDeleteService = require("../services/dishes/DishesDeleteService")
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

  async index(request, response) {
    const { search } = request.query

    const dishesRepository = new DishesRepository()
    const dishesIndexService = new DishesIndexService(dishesRepository)

    const dishes = await dishesIndexService.execute(search)

    return response.json(dishes)
  }

  async show(request, response) {
    const { dishID } = request.params

    const dishesRepository = new DishesRepository()
    const ingredientsRepository = new IngredientsRepository()
    const dishesShowService = new DishesShowService(dishesRepository, ingredientsRepository)

    const dish = await dishesShowService.execute(dishID)

    return response.json(dish)
  }

  async update(request, response) {
    const { dishID } = request.params
    const { name, category, price, description, ingredients } = request.body

    const dishesRepository = new DishesRepository()
    const ingredientsRepository = new IngredientsRepository()
    const dishesUpdateService = new DishesUpdateService(dishesRepository, ingredientsRepository)

    const dish = await dishesUpdateService.execute(dishID, {
      name,
      category,
      price,
      description,
      ingredients
    })

    return response.json(dish)
  }

  async delete(request, response) {
    const { dishID } = request.params

    const dishesRepository = new DishesRepository()
    const dishesDeleteService = new DishesDeleteService(dishesRepository)

    await dishesDeleteService.execute(dishID)

    return response.status(204).send()
  }
}

module.exports = DishesController