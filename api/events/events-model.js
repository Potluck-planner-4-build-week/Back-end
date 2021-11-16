const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("events as e")
    .orderBy("e.event_id");
}

function findById(id) {
  return db("events as e")
    .select(
        "e.event_id",
        "e.event_name",
        "e.location",
        "e.date",
        "e.time",
        "e.event_description",
        "e.attendees"
    )
    .where("e.event_id", id)
    .first();
}

async function add(event) {
  const [id] = await db("events").insert(event);
  return findById(id);
}
