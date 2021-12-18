const Student = require('../models/Student')
const student = {
    create : async (req,res)=>{
            const {name,contact} = req.body
            const student = new Student({name,contact})
            await student.save()
            res.cookie('refreshtoken', name, {
                httpOnly:true,
                maxAge: 3000
            })
            res.redirect('/')
    },
    all : async (req,res)=>{
        const all = await Student.find().limit(100).sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/student/index', {
            layout:'./admin_layout', all, user
        })
    },
    findByIdAndDelete : async(req,res)=>{
        await Student.findByIdAndDelete(req.params.id)
        res.redirect('/api/student')
    }
}

module.exports = student