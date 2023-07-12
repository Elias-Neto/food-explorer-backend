exports.up = knex => {
  return (
    knex.schema.createTable("dishes", table => {
      table.increments("id").primary()

      table.text("name").notNullable()
      table.text("photo").notNullable()
      table.float("price").notNullable()
      table.text("category").notNullable()
      table.text("description").notNullable()

      table.timestamp("created_at").defaultTo(knex.fn.now())
      table.timestamp("updated_at").defaultTo(knex.fn.now())
    })
  )
}

exports.down = knex => knex.schema.dropTable("dishes")