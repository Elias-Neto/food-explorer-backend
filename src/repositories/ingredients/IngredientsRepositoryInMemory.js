class IngredientsRepositoryInMemory {
  ingredients = []

  async findByID(ingredientID) {
    const ingredient = this.ingredients.find((ingredient) => ingredient.id === ingredientID)

    return ingredient
  }

  async findByDishID(dishID) {
    const ingredients = this.ingredients.filter((ingredient) => ingredient.dish_id === dishID)

    return ingredients
  }

  async insert(ingredient) {
    const insertIngredient = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...ingredient,
    }

    this.ingredients.push(insertIngredient)

    return this.findByID(insertIngredient.id)
  }

  async deleteByDishID(dishID) {
    this.ingredients = this.ingredients.filter((ingredient) => ingredient.dish_id !== dishID)

    return this.ingredients
  }
}

module.exports = IngredientsRepositoryInMemory