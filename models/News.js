const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    title:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    description:{
        type:String,
        required:true,
        minlength:10,
        trim:true
    },
    image : {
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("News", newsSchema)