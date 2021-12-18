const mongoose = require('mongoose')

const galleyrSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Gallery", galleyrSchema)