const {Router} = require('express');
const router = Router()
const login = require('../controllers/login');
const {postFav, deleteFav, cleanFavs} = require('../controllers/handleFavorites');
const getCharById = require('../controllers/getCharById');

router.get('/character/:id', (req, res)=> {
    getCharById(req, res)
})

router.get('/login', login)

router.post('/fav', postFav)

router.delete('/fav/clean', cleanFavs)

router.delete('/fav/:id', deleteFav)

module.exports = router //PRESTÁ ATENCIÓN