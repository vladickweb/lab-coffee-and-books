const router = require("express").Router();
const { find } = require("./../models/Place.model");
const Place = require('./../models/Place.model')
const API_KEY = process.env.API_KEY

router.get('/', (req, res) => {

    Place
        .find()
        .then((allPlaces) => {
            res.render('places/list-places', { allPlaces, API_KEY })
        })
        .catch((err) => console.log(err))

    // res.render('places/list-places')
})

router.get('/create', (req, res) => {
    res.render('places/create-places')
})

router.post('/create', (req, res) => {

    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({name, type, location})
        .then(place => res.redirect('/places/'))
        .catch(err => console.log(err))
})

router.post('/remove', (req, res) => {
    const { id } = req.body
    Place
        .findByIdAndDelete(id)
        .then(res.redirect('/places'))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    
    Place
        .findById(id)
        .then((place) => {
            res.render('places/details', place)
        })
        .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {
    
    const { id } = req.params

    Place
        .findById(id)
        .then((place) => res.render('places/edit-places', place))
        .catch((err) => console.log(err))
    
})

module.exports = router;
