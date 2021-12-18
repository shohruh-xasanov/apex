const User = require('../../models/User')
const bcrypt = require('bcrypt')

const getUser = {
    /* Add user */
    createUser : async (req,res)=>{
        try {
            const {fullname,login ,password } = req.body
            const user = new User({fullname, login,password})
            
            await user.save()
            res.redirect('/api/dashboard')
        } catch (error) {
            res.redirect('/api/create/user')
        }
    },
    createUserPage : async (req,res)=>{
        const user = req.session.admin
        res.render('admin/profile/index', {
            layout:'./admin_layout', user
        })
    },
    userFind :async (req,res)=>{
        const result = await User.findById(req.params.id).select('-password -login -role')
        const user = req.session.admin
        res.render('admin/profile/update',{
            layout:'./admin_layout', user, result
        })
    },
    /* User update */
    userUpdate : async (req, res)=>{
        const {login ,password,oldpassword  } = req.body
        const user = req.session.admin
        const result = await  User.findById(req.params.id)
        if(!bcrypt.compareSync(oldpassword, result.password)){
            return res.render('admin/profile/update',{
                layout:'./admin_layout', user,result, err:"Joriy parolingiz xato kiritildi"
            })
         }else{
            result.password = password
            result.login = login
            await result.save()
            res.redirect('/api/dashboard')
         }
    }
}

module.exports = getUser