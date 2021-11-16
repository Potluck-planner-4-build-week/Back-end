exports.seed = async function (knex) {
  await knex('events').insert([
    { event_name: "Birthday", location: "Your House", date: "YYYY-MM-DD", time: "hh:mm:ss", event_description: "optional", attendees: 3 },
  ])
}