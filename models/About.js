const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema({
    location:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    map:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    fb:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    tg:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    insta:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("About", aboutSchema)