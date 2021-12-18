const express = require('express')
require('dotenv').config('.env');
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db').connectDB
require('ejs')

const app = express()
connectDB()

require('./app')(app)
require('./routes/all_routes')(app)

app.listen(PORT, ()=>{
    console.log(`Server is running to ${PORT}` )
})
