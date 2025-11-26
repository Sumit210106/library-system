const express = require('express');
const bookRouter = require('./routes/book.routes')
require('dotenv').config();

const app = express() ;
app.use(express.json());
const PORT = 5454 ;

// app.use('/' , (req,res) => {
//     console.log('/ is running') 
//     res.send('Ok')
// })

app.use('/api/v1' , bookRouter)


app.listen(PORT , () => {
    console.log(`server is running in port ${PORT}`)
})

