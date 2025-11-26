const {addBook} = require('../controllers/book.controller') ;
const express = require('express')

const router = express.Router();

router.post('/books' , addBook)


module.exports = router; 