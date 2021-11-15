exports.seed = async function (knex) {
  await knex('users').insert([
    { username: "Mina", password: "1234", email: "mina@mail.com", role_id: 1 },
    { username: "Phil", password: "4321", email: "phil@mail.com", role_id: 2 }
  ])
}