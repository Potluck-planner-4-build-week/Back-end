exports.seed = async function (knex) {
  await knex('foods').insert([
    { food_name: "Pizza", food_description: "optional" },
  ])
}