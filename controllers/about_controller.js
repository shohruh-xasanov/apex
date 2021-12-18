const About = require('../models/About')

const about = {
    create : async (req,res)=>{
        const {location,phone,email,map,fb,tg,insta} = req.body
        const about = new About({location,phone,email,map,fb,tg,insta})
        await about.save()
        res.redirect('/api/about')
    },
    all : async (req,res)=>{
        const all = await About.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/contact/ourcontact', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        await About.findByIdAndDelete(req.params.id)
        res.redirect('/api/about')
    },
    findByIdAndUpdate : async (req,res)=>{
        const {location,phone,email,map,fb,tg,insta} = req.body  
        const result = await About.findByIdAndUpdate({_id:req.params.id},{location,phone,email,map,fb,tg,insta})
        await result.save()
        res.redirect('/api/about')
    }
}

module.exports = about