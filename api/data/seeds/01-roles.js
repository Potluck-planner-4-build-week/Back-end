exports.seed = async function (knex) {
  await knex('roles').insert([
    { role_name: "admin" },
    { role_name: "organizer" },
    { role_name: "guest" },
  ])
}