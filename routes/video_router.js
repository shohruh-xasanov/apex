const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/video_controller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/video',upload.single('image'), create)
router.get('/video/delete/:id', findByIdAndDelete)
router.put('/video/:id',upload.single('image'), findByIdAndUpdate)
router.get('/video', all)

module.exports = router