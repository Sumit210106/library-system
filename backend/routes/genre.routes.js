const {addGenre , readGenre , updateGenre ,deleteGenre} = require('../controllers/genre.controller')

const express = require('express')

const router = express.Router();


router.post('/genre' , addGenre)
router.get('/genre' , readGenre)
router.patch('/genre/:genreId' , updateGenre)
router.delete('/genre/:genreId' , deleteGenre)

module.exports = router;

