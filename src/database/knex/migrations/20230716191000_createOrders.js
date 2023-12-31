exports.up = knex => {
  return (
    knex.schema.createTable("orders", table => {
      table.increments("id").primary()

      table
        .integer("dish_id")
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .notNullable()
      table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .notNullable()

      table.integer("quantity").notNullable()
    })
  )
}

exports.down = knex => knex.schema.dropTable("orders")