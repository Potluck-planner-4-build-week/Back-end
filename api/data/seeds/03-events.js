exports.seed = async function (knex) {
  await knex("events").insert([
    {
      event_name: "Birthday",
      location: "Your House",
      date: "2022-02-02",
      time: "11:59:59",
      event_description: "optional",
      attendees: 3,
    },
  ]);
};
