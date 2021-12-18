const Video = require('../models/Video')
const {sharpFile} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const video = {
    create : async (req,res)=>{
        const {video} = req.body
        const file = req.file.filename
        const image = await sharpFile(file, 320, 180 )
        const result = new Video({video,image})
        await result.save()
        res.redirect('/api/video')
    },
    all : async (req,res)=>{
        const all = await Video.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/video/index', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        const result  = await Video.findById(req.params.id)
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        await Video.findByIdAndDelete(req.params.id)
        res.redirect('/api/video')
    },
    findByIdAndUpdate : async (req,res)=>{
        const file = req.file.filename
        const image = await sharpFile(file, 320, 180)
        const result  = await Video.findById(req.params.id)
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        const {video} = req.body  
        const result1 = await Video.findByIdAndUpdate({_id:req.params.id},{video,image})
        await result1.save()
        res.redirect('/api/video')
    }
}

module.exports = video