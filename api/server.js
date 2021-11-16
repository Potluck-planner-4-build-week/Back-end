const express = require("express");
// const helmet = require('helmet')
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const eventsRouter = require("./events/events-router.js");

const server = express();
server.use(express.json());
// server.use(helmet())
server.use(cors());
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/events", eventsRouter);

server.get("*", (req, res, next) => {
  res.json("server is running... reassess your request");
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;

// function getAllUsers() { return db('users') }

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }
