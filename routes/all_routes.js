require('express-async-errors');
const {roles} = require('../middleware/auth')
const errorHandler = require('../middleware/error')


module.exports = function (app) {
    app.use('/', require('./main_router'))
    app.use('/api', require('./userRouter'))
    app.use('/api', require('./student_router'))
    app.use('/api', require('./contact_router'))
    app.use('/api',roles, require('./dashboard_router'))
    app.use('/api',roles, require('./course_router'))
    app.use('/api',roles, require('./news_router'))
    app.use('/api',roles, require('./teacher_router'))
    app.use('/api',roles, require('./result_router'))
    app.use('/api',roles, require('./comment_router'))
    app.use('/api',roles, require('./about_router'))
    app.use('/api',roles, require('./header_router'))
    app.use('/api',roles, require('./gallery_router'))
    app.use('/api',roles, require('./video_router'))

    app.use((req,res,next)=>{
        res.status(404)
        res.render('client/err',{
            layout:false
        })
        next()
    })
    
    app.use(errorHandler)
    app.use(function (err, req,res,next){
        if(err){
            res.render('client/err',{
                layout:false
            })
        }
        next()
    })
    
    process.on('uncaughtException', ex=>{
        process.exit(1);
    })

    process.on('unhandledRejection', ex=>{
        process.exit(1);
    })
}
