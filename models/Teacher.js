const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    job:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    practice:{
        type:String,
        required:true,
        trim:true
    },
    students:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Teacher", teacherSchema)