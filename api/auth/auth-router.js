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
    let user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;

    if (!user.username || !user.password || !user.email) {
        next({ status: 400, message: "username, password, email required" });
    } else {
        Users.add(user) // add encryption later
        .then((newUser) => {
            console.log(newUser.password)
            res.status(201).json({ message: `Welcome ${newUser}` });
        })
        .catch(next);
    }

});



router.post('/login', (req, res, next) => {
    let { username, password } = req.body;
    // middleware??? 
    Users.findByUsername({ username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokenBuilder(user)
          res.status(200).json({
            message: `Welcome back ${user.username}!`, token
          });
        } else {
          next({ status: 401, message: 'Invalid Credentials' });
        }
      })
      .catch(next);
  });

module.exports = router;
