const bcrypt = require("bcrypt");
const router = require("express").Router();
const tokenBuilder = require("./token-builder");

const Users = require("../users/users-model.js");

// router.post("/register", (req, res, next) => {
//   const { username, password, email, role_id } = req.body;
//   if (!username || !password || !email || !role_id) {
//     //create middleware for this you lazy butt
//     //assign role_id to be guest upon no entry
//     next({ status: 400, message: "username, password, email and role required" });
//   }{
//     Users.add(req.body) // add encryption later
//       .then((newUser) => {
//         res.json({ message: `Welcome ${newUser}` });
//       })
//       .catch(next);
//   }
// });

router.post("/register", (req, res, next) => {
    const { username, password, email, role_id } = req.body;
    if (!username || !password || !email || !role_id) {
      //create middleware for this you lazy butt
      //assign role_id to be guest upon no entry
      next({ status: 400, message: "username, password, email and role required" });
    }{
      Users.add(req.body) // add encryption later
        .then((newUser) => {
          res.json({ message: `Welcome ${newUser}` });
        })
        .catch(next);
    }
  });



router.post("/login", (req, res, next) => {
  res.json("logging in... syke");
});

module.exports = router;
