const router = require("express").Router()

const Place = require('./../models/Place.model')

router.get('/places', (req, res) => {

    Place
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => console.log(err))

})

module.exports = router