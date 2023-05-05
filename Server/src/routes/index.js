const {Router} = require('express');
const router = Router()      

const {postUser} = require('../controllers/postUser');
const {login} = require('../controllers/login');

const {postFav} = require('../controllers/postFav');
const {deleteFav} = require('../controllers/deleteFav');

const getCharById = require('../controllers/getCharById');



router.get('/character/:id', (req, res)=> {
    getCharById(req, res)
})

router.get('/login', login)
router.post('/login', postUser)

router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)



module.exports = router //PRESTÁ ATENCIÓN