const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    job:{
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
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Comment", commentSchema)