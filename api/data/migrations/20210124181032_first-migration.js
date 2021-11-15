exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', roles => {
      roles.increments('role_id')
      roles.string('role_name', 32).notNullable().unique()
    })
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('email', 128).notNullable()
      users.integer('role_id')
           .unsigned()
           .notNullable()
           .references('role_id')
           .inTable('roles')
          //  .onUpdate('RESTRICT')
          //  .onDelete('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
}
