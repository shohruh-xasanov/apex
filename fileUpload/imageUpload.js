const multer = require('multer')
const path = require('path')
const md5 = require('md5')
const fs = require('fs')


const store= multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'public/uploads/image')
        
    },
    filename: (req, file, cb)=>{
        let ext = path.extname(file.originalname)
        cb(null,  md5(Date.now()) + ext)
    }
})

var  upload = multer ({
    storage: store,
})

module.exports= upload
