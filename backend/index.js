const express = require('express');
const bookRouter = require('./routes/book.routes')
const genreRouter = require('./routes/genre.routes')
require('dotenv').config();
const cors = require("cors");

const app = express() ;
app.use(cors());
app.use(express.json());
const PORT = 5454 ;

// app.use('/' , (req,res) => {
//     console.log('/ is running') 
//     res.send('Ok')
// })

app.use('/api/v1' , bookRouter)
app.use('/api/v1' , genreRouter)

app.listen(PORT , () => {
    console.log(`server is running in port ${PORT}`)
})

