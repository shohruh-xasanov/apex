const express = require('express')
const bodyParser = require('body-parser')
const store = require('./config/db').store
const layout = require('express-ejs-layouts')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const ejs = require('ejs')
const methodOverride = require('method-override')
const compression = require('compression')



module.exports = function (app){
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            saveUninitialized:false,
            resave:false,
            store:store,
    
            cookie:{
                httpOnly:true,
                maxAge:1000*60*60*24*10,
                sameSite:'Strict'
            }
        })
    )
    
    app.use(bodyParser.json())
    app.locals.moment = require("moment");
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(methodOverride('_method',{
        methods:['POST', 'GET']
    }))
    app.use(compression())
    app.use(cookieParser())
    app.use(cors())
    app.use(layout)
    app.set('view engine', 'ejs')
    app.set('views', './views')

    app.use('/public',express.static('public'));
    app.use(express.static(path.join(__dirname + "/public/admin")))
    app.use(express.static(path.join(__dirname + "/public/client")))
}