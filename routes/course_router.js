const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/course_conroller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/course',upload.single('image'), create)
router.get('/course/delete/:id', findByIdAndDelete)
router.put('/course/:id',upload.single('image'), findByIdAndUpdate)
router.get('/course', all)

module.exports = router