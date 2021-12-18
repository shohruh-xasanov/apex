const Header = require('../models/Header')

const header = {
    create : async (req,res)=>{
        const {title, description} = req.body
        const header = new Header({title, description})
        await header.save()
        res.redirect('/api/header')
    },
    all : async (req,res)=>{
        const all = await Header.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/content/index', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        await Header.findByIdAndDelete(req.params.id)
        res.redirect('/api/header')
    },
    findByIdAndUpdate : async (req,res)=>{
        const {title, description} = req.body  
        const result = await Header.findByIdAndUpdate({_id:req.params.id},{title, description})
        await result.save()
        res.redirect('/api/header')
    }
}

module.exports = header