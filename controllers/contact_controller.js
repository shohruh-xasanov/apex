const Contact = require('../models/Contact')

const contact = {
    create : async (req,res)=>{
            const {name,phone,email} = req.body
            if(name.length <3 ){
                res.render('client/index', {
                    layout:false,  name_err:"Ism va familya eng kamida 3ta harfdan iborat bo'lishi shart!!!"
                })
            }if(phone.length <3){
                res.render('client/index', {
                    layout:false, phone_err:"Telefon nomer eng kamida 3ta harfdan iborat bo'lishi shart!!!"
                })
            }if(email.length <3){
                res.render('client/index', {
                    layout:false, email_err:"Email eng kamida 3ta harfdan iborat bo'lishi shart!!!"
                })
            }else{
                res.cookie('refreshtoken', name, {
                    httpOnly:true,
                    maxAge: 3000
                })
                const contact = new Contact({name,phone,email})
                await contact.save()
                res.redirect('/')
            }
    },
    all : async (req,res)=>{
        const all = await Contact.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/contact/contact', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        await Contact.findByIdAndDelete(req.params.id)
        res.redirect('/api/contact')
    }
}

module.exports = contact