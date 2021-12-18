const User = require('../../models/User')

exports.login = async (req,res,next)=>{
    try {
        const {login, password} = req.body
    if (!login && !password) {
      res.redirect("/api/auth/login");
    }
    await User.findOne({login}).then((user)=>{
        if(!user){
                return res.render('admin/login/index',{
                    layout:'./admin/login/layout', data:"Parol yoki login xato"
                })
            } user.matchPassword(password, (err, isMatch)=>{
                if(err){
                   return res.render('admin/login/index',{
                    layout:'./admin/login/layout', data:"Parol yoki login xato"
                })
                }
                if (!isMatch) {
                   return res.render('admin/login/index',{
                    layout:'./admin/login/layout', data:"Parol yoki login xato"
                })
                  }else{
                      req.session.admin = data={id:user._id}
                      req.session.save()
                      res.redirect('/api/dashboard')
                  }
            });
    })
    } catch (error) {
        res.redirect('/api/login')
    }
}

exports.getLogin = async (req,res)=>{
    res.render('admin/login/index',{
        layout:'./admin/login/layout'
    })
}

exports.logout = async (req,res,next)=>{
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.redirect('/api/login')
}