const mongoose = require('mongoose')

const galleyrSchema = new mongoose.Schema({
    video:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Video", galleyrSchema)