const router = require("express").Router();
const Events = require("./events-model.js");

router.get('/', (req, res, next) => {
    Events.find()
      .then(result => {
          res.status(200).json(result);
      })
      .catch(next);
})

router.get('/:id', (req, res, next) => {
    Events.findById(req.params.id)
      .then(result => {
          res.status(200).json(result);
      })
      .catch(next);
})

router.post('/', (req, res, next) => {
    Events.add(req.body)
      .then(newEvent => {
          res.status(201).json(newEvent);
      })
      .catch(next);
})

module.exports = router;