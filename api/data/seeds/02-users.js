exports.seed = async function (knex) {
  await knex('users').insert([
    { username: "Mina", password: "1234", email: "mina@mail.com", role_id: 1, contribution: "pizza" },
    { username: "Phil", password: "4321", email: "phil@mail.com", role_id: 2, contribution: "soda" },
    { username: "Michael", password: "abcd", email: "michael@mail.com", role_id: 3, contribution: "pie" },
    { username: "Mark", password: "dcba", email: "mark@mail.com", role_id: 3, contribution: "chicken" },
    { username: "Alan", password: "wxyz", email: "alan@mail.com", role_id: 3, contribution: "napkins" },
  ])
}