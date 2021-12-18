const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    univercity:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    during_learning:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Result", resultSchema)