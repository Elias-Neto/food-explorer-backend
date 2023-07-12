exports.up = knex => {
  return (
    knex.schema.createTable("ingredients", table => {
      table.increments("id").primary()

      table
        .integer("dish_id")
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .notNullable()

      table.text("name").notNullable()
    })
  )
}

exports.down = knex => knex.schema.dropTable("ingredients")