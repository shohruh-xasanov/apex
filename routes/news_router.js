const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/news_controller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/news',upload.single('image'), create)
router.get('/news/delete/:id', findByIdAndDelete)
router.put('/news/:id',upload.single('image'), findByIdAndUpdate)
router.get('/news', all)

module.exports = router