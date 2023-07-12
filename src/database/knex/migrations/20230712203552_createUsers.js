exports.up = knex => {
  return (
    knex.schema.createTable("users", table => {
      table.increments("id").primary()

      table.text("name").notNullable()
      table.text("email").notNullable()
      table.text("password").notNullable()

      table.boolean("admin").notNullable().defaultTo(false)
    })
  )
}

exports.down = knex => knex.schema.dropTable("users")