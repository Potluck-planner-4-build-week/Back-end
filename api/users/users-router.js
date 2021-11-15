const router = require("express").Router();
// middleware?
// model
const Users = require('./users-model');

//CRUD - create(POST), read(GET), update(PUT), delete(DELETE)

router.get('/', async (req, res, next) => {
    await Users.find()
      .then(result => {
          res.json(result)
      })
})

router.get('/:id', async (req, res, next) => {
    await Users.findById(req.params.id)
      .then(result => {
          res.json(result)
      })
    // res.json(await Users.findBy(req.params.id))
})

router.post('/', (req, res, next) => {
    res.json('post fires')
})

router.put('/:id', (req, res, next) => {
    res.json('put fires')
})

// router.get('/:id', (req, res, next) => {
//     res.json('delete fires')
// })

module.exports = router;