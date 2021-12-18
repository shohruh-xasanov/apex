const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    contact:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Student", contactSchema)