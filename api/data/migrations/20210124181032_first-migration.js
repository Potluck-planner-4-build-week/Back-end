exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', roles => {
      roles.increments('role_id')
      roles.string('role_name', 32).notNullable().unique()
    })
    // .createTable('foods', foods => {
    //   foods.increments('food_id')
    //   foods.string('food_name', 128).notNullable()
    //   foods.string('food_description', 256)
    // })
    .createTable('users', users => {
      users.increments('user_id')
      users.string('username', 64).notNullable().unique()
      users.string('password', 64).notNullable()
      users.string('email', 128).notNullable()
      users.string('contribution', 128).notNullable()
      users.integer('role_id')
           .unsigned()
           .notNullable()
           .references('role_id').inTable('roles')
      // users.integer('food_id')
      //      .unsigned()
      //      .notNullable()
      //      .references('food_id').inTable('foods')
      //  .onUpdate('RESTRICT') ERROR: foreign_key constraint - why?
      //  .onDelete('RESTRICT')
    })
    .createTable('events', events => {
      events.increments('event_id')
      events.string('event_name', 128).notNullable()
      events.string('location', 128).notNullable()
      events.date('date').notNullable()
      events.time('time').notNullable()
      events.string('event_description', 256)
      events.integer('attendees')
      // .unsigned()
      // .notNullable()
      // .references('user_id')
      // .inTable('users')
      //  .onUpdate('RESTRICT')
      //  .onDelete('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('events')
    .dropTableIfExists('users')
    // .dropTableIfExists('foods')
    .dropTableIfExists('roles')
}
