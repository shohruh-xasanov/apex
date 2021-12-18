const User = require('../models/User')
const News = require('../models/News')
const Course = require('../models/Course')
const Teacher = require('../models/Teacher')
const Comment = require('../models/Comment')
const Gallery = require('../models/Gallery')
const Video = require('../models/Video')


const dashboard = {
    all : async (req,res)=>{
        const user = req.session.admin
        const news = await News.find().countDocuments()
        const course = await Course.find().countDocuments()
        const teacher = await Teacher.find().countDocuments()
        const comment = await Comment.find().countDocuments()
        const gallery = await Gallery.find().countDocuments()
        const video = await Video.find().countDocuments()
        res.render('admin/index',{
            layout:'./admin_layout', user,news, course,teacher, comment, gallery, video
        })
    }
}

module.exports = dashboard