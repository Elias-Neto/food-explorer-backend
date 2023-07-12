exports.up = knex => {
  return (
    knex.schema.createTable("favorites", table => {
      table.increments("id").primary()

      table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .notNullable()
      table
        .integer("dish_id")
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .notNullable()
    })
  )
}

exports.down = knex => knex.schema.dropTable("favorites")