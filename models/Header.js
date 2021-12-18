const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    description:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Header", sliderSchema)