const router = require("express").Router();
// middleware?
// model
const Users = require('./users-model');

router.get('/', async (req, res) => {
    await Users.get()
      .then(result => {
          res.json(result)
      })
    // res.json(await Users.get())
})

// router.post('/', async (req, res) => {
//     res.status(201).json(await insertUser(req.body))
// })      

module.exports = router;