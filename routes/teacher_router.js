const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/teacher_controller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/teacher',upload.single('image'), create)
router.get('/teacher/delete/:id', findByIdAndDelete)
router.put('/teacher/:id',upload.single('image'), findByIdAndUpdate)
router.get('/teacher', all)

module.exports = router