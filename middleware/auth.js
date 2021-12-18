const roles = (req, res, next) => {
    if(req.session.admin){
        if(req.session.admin){
                next();
          }else{
            return res.render('client/err',{
                layout:false
            })
          }
    }else{
        return res.render('client/err',{
            layout:false
        })
    }
};

module.exports = {roles}