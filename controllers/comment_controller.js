const Comment = require('../models/Comment')
const {sharpFile} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const comment = {
    create : async (req,res)=>{
            const {name,job, description} = req.body
            const all = await Comment.find().limit(100).sort({createdAt:-1})
            const user = req.session.admin
            if(name.length <3){
                res.render('admin/result/comment', {
                    layout:'./admin_layout', name_err:"Ismi va familya eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
                })
            }else if(job.length <3){
                res.render('admin/result/comment', {
                    layout:'./admin_layout', job_err:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
                })
            }else if(description.length <1){
                res.render('admin/result/comment', {
                    layout:'./admin_layout', description_err:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
                })
            }else{
                const file = req.file.filename
                const image = await sharpFile(file,368 , 207 )
                const comment = new Comment({name,job, description, image})
                await comment.save()
                res.redirect('/api/comment')
            }
    },
    all : async (req,res)=>{
        const all = await Comment.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/result/comment', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        const result  = await Comment.findById(req.params.id)
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        await Comment.findByIdAndDelete({_id:result._id})
        res.redirect('/api/comment')
    },
    findByIdAndUpdate : async (req,res)=>{
        const {name,job, description} = req.body  
        const all = await Comment.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        if(name.length <3 ){
            res.render('admin/result/comment', {
                layout:'./admin_layout', name_err1:"Ism va familya eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
            })
        }else if(job.length <3){
            res.render('admin/result/comment', {
                layout:'./admin_layout', job_err1:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
            })
        }else if(description.length <1){
            res.render('admin/result/comment', {
                layout:'./admin_layout', description_err1:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
            })
        }else{
        const file = req.file.filename
        const image = sharpFile(file,368 , 207)
        const result = await Comment.findByIdAndUpdate({_id:req.params.id},{name,job, description})
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        result.image = image
        await result.save()
        res.redirect('/api/comment')
        }
    }
}

module.exports = comment