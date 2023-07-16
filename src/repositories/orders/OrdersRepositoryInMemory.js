class OrdersRepositoryInMemory {
  orders = []
  dishes = [
    {
      id: 1,
      name: "Prato Example",
      category: "Categoria Example",
      price: 10,
      description: "Descrição Example",
      ingredients: ["Ingredient One", "Ingredient Two"]
    }
  ]

  async findByID(orderID) {
    const order = this.orders.find((order) => order.id === orderID)

    return order
  }

  async insert(order) {
    const insertOrder = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...order
    }

    this.orders.push(insertOrder)

    return this.findByID(insertOrder.id)
  }

  async findByUserID(userID) {
    const defaultDishes = this.orders.filter((order) => order.user_id === userID)

    const ordersWithDishes = defaultDishes.map((order) => {
      const dish = this.dishes.find((dish) => dish.id === order.dish_id)

      return {
        order_id: order.id,
        order_quantity: order.quantity,
        dish_id: dish.id,
        dish_name: dish.name,
        dish_price: dish.price,
        dish_photo: dish.photo,
      }
    })

    return ordersWithDishes
  }
}

module.exports = OrdersRepositoryInMemory