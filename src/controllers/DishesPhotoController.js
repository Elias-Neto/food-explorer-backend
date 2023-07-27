const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')
const DishesRepository = require('../repositories/dishes/DishesRepository')

class DishPhotoController {
  async update(request, response) {
    const { dishID } = request.params
    const photoFilename = request.file.filename

    const diskStorage = new DiskStorage()
    const dishesRepository = new DishesRepository()

    const dish = await dishesRepository.findByID(dishID)

    if (!dish) {
      throw new AppError('Prato não encontrado.', 404)
    }

    if (dish.photo) {
      await diskStorage.deleteFile(dish.photo)
    }

    const filename = await diskStorage.saveFile(photoFilename)

    dish.photo = filename
    delete dish.id

    await dishesRepository.update(dishID, dish)

    return response.json(dish)
  }
}

module.exports = DishPhotoController;
