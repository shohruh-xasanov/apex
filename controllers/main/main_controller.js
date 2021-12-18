const Course = require('../../models/Course')
const Header = require('../../models/Header')
const News = require('../../models/News')
const Teacher = require('../../models/Teacher')
const Gallery = require('../../models/Gallery')
const Result = require('../../models/Result')
const Comment = require('../../models/Comment')
const About = require('../../models/About')
const Video = require('../../models/Video')

exports.main = async(req,res)=>{
    const header = await Header.find().sort({createdAt:-1}).limit(1)
    const course = await Course.find().sort({createdAt:-1}).limit(10)
    const news = await News.find().sort({createdAt:-1}).limit(10)
    const teacher = await Teacher.find().sort({createdAt:-1}).limit(10)
    const gallery = await Gallery.find().sort({createdAt:-1}).limit(6)
    const video = await Video.find().sort({createdAt:-1}).limit(10)
    const result = await Result.find().sort({createdAt:-1}).limit(10)
    const comment = await Comment.find().sort({createdAt:-1}).limit(10)
    const about = await About.find().sort({createdAt:-1}).limit(1)
    const contact_data = req.cookies.refreshtoken
    res.render('client/main',{
        layout:false, header,course,news,teacher,gallery,video,result,comment,about,contact_data
    })
}