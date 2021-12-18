const News = require('../models/News')
const {sharpFile} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const news = {
    create : async (req,res)=>{
            const {name,title,description} = req.body
            const all = await News.find().limit(100).sort({createdAt:-1})
            const user = req.session.admin
            if(name.length <5 ){
                res.render('admin/news/index', {
                    layout:'./admin_layout', all, user, name_err:"Yangilik eng kamida 5ta harfdan iborat bo'lishi shart!!!"
                })
            }if(title.length <5){
                res.render('admin/news/index', {
                    layout:'./admin_layout', all, user, title_err:"Yangilik qisqa tavsifi eng kamida 5ta harfdan iborat bo'lishi shart!!!"
                })
            }if(description.length <10){
                res.render('admin/news/index', {
                    layout:'./admin_layout', all, user, description_err:"Yangilik matni eng kamida 10ta harfdan iborat bo'lishi shart!!!"
                })
            }else{
                const file = req.file.filename
                const image = await sharpFile(file,369, 178)
                const news = new News({name,title,description,image})
                await news.save()
                res.redirect('/api/news') 
            }
    },
    all : async (req,res)=>{
        const all = await News.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/news/index', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        const result  = await News.findById(req.params.id)
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        await News.findByIdAndDelete({_id:result._id})
        res.redirect('/api/news')
    },
    findByIdAndUpdate : async (req,res)=>{
        const {name, title, description} = req.body  
        const all = await News.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        if(name.length <5 ){
            res.render('admin/news/index', {
                layout:'./admin_layout', all, user, name_err1:"Yangilik eng kamida 5ta harfdan iborat bo'lishi shart!!!"
            })
        }else if(title.lenth <5){
            res.render('admin/news/index', {
                layout:'./admin_layout', all, user, title_err1:"Yangilik qisqa tavsifi eng kamida 5ta harfdan iborat bo'lishi shart!!!"
            })
        }else if(description.length <10){
            res.render('admin/news/index', {
                layout:'./admin_layout',all, user, description_err1:"Yangilik matni eng kamida 10ta harfdan iborat bo'lishi shart!!!"
            })
        }else{
        const file = req.file.filename
        const image = await sharpFile(file,369, 178)
        const result = await News.findByIdAndUpdate({_id:req.params.id},{name, title, description})
        if(result.image){
            fs.unlink(path.join(path.dirname(__dirname) + result.image), (error) => {
                if (error) {
                  return
                }
            });
        }
        result.image = image
        await result.save()
        res.redirect('/api/news')
        }
    }
}

module.exports = news