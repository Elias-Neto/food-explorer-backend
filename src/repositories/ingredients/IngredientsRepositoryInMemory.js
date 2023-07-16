class IngredientsRepositoryInMemory {
  ingredients = []

  async findByID(ingredientID) {
    const ingredient = this.ingredients.find((ingredient) => ingredient.id === ingredientID)

    return ingredient
  }

  async insert(ingredient) {
    const insertIngredient = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...ingredient
    }

    this.ingredients.push(insertIngredient)

    return this.findByID(insertIngredient.id)
  }
}

module.exports = IngredientsRepositoryInMemory