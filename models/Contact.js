const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    email:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Contact", contactSchema)