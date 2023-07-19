class DishesRepositoryInMemory {
  dishes = [
    {
      name: "Salada Example",
      category: "salad",
      price: 10,
      description: "Descrição Example",
      ingredients: ["Ingredient One 1", "Ingredient Two 1"]
    },
    {
      name: "Spaghetti Example",
      category: "pasta",
      price: 15,
      description: "Descrição Example",
      ingredients: ["Ingredient One 2", "Ingredient Two 2"]
    }
  ]

  async findByID(dishID) {
    const dish = this.dishes.find((dish) => dish.id === dishID)

    return dish
  }

  async insert(dish) {
    const insertDish = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...dish
    }

    this.dishes.push(insertDish)

    return this.findByID(insertDish.id)
  }

  async findAll(search) {
    if (!search) {
      return this.dishes
    }

    const lowerCaseSearch = search.toLowerCase()

    const filteredDishes = this.dishes.filter((dish) => {
      const dishName = dish.name.toLowerCase()
      const ingredientNames = dish.ingredients.map((ingredient) =>
        ingredient.toLowerCase()
      )
      return dishName.includes(lowerCaseSearch) || ingredientNames.includes(lowerCaseSearch)
    })

    return filteredDishes
  }
}

module.exports = DishesRepositoryInMemory