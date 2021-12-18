const Gallery = require('../models/Gallery')
const path = require('path')
const fs = require('fs')
const {sharpFile} = require('../fileUpload/sharp')

const gallery = {
    create : async (req,res)=>{
            const file = req.file.filename
            const image = await sharpFile(file, 369, 272)
            const gallery = new Gallery({image})
            await gallery.save()
            res.redirect('/api/photo')
    },
    all : async (req,res)=>{
        const all = await Gallery.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/photo/index', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        const result  = await Gallery.findById(req.params.id)
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        await Gallery.findByIdAndDelete({_id:result._id})
        res.redirect('/api/photo')
    }
}

module.exports = gallery