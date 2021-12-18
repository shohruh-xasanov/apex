const Result = require('../models/Result')
const {sharpFile} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const result = {
    create : async (req,res)=>{
            const {name,univercity, during_learning} = req.body
            const all = await Result.find().limit(100).sort({createdAt:-1})
            const user = req.session.admin
            if(name.length <5){
                res.render('admin/result/student', {
                    layout:'./admin_layout', name_err:"Ism va familya eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
                })
            }else if(univercity.length <3){
                res.render('admin/result/student', {
                    layout:'./admin_layout', univercity_err:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
                })
            }else if(during_learning.length <3){
                res.render('admin/result/student', {
                    layout:'./admin_layout', during_learning_err:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
                })
            }else{
                const file = req.file.filename
                const image = await sharpFile(file,110, 110)
                const result = new Result({name,univercity, during_learning, image})
                await result.save()
                res.redirect('/api/result')
            }
    },
    all : async (req,res)=>{
        const all = await Result.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/result/student', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        const result  = await Result.findById(req.params.id)
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        await Result.findByIdAndDelete({_id:result._id})
        res.redirect('/api/result')
    },
    findByIdAndUpdate : async (req,res)=>{
        const {name,univercity, during_learning} = req.body  
        const all = await Result.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        if(name.length <3 ){
            res.render('admin/result/student', {
                layout:'./admin_layout', name_err1:"Ism va familya eng kamida 5ta harfdan iborat bo'lishi shart!!!",all ,user
            })
        }else if(univercity.length < 3){
            res.render('admin/result/student', {
                layout:'./admin_layout', univercity_err1:"Malumot eng kamida  3ta harfdan iborat bo'lishi shart!!!",all ,user
            })
        }else if(during_learning.length <3){
            res.render('admin/result/student', {
                layout:'./admin_layout', during_learning_err1:"Malumot eng kamida 3ta harfdan iborat bo'lishi shart!!!",all ,user
            })
        }else{
        const file = req.file.filename
        const image = sharpFile(file,110, 110)
        const result = await Result.findByIdAndUpdate({_id:req.params.id},{name,univercity, during_learning})
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        result.image = image
        await result.save()
        res.redirect('/api/result')
        }
    }
}

module.exports = result