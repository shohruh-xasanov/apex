const router = require('express').Router()
const {all, create,findByIdAndDelete} = require('../controllers/gallery_controller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/photo',upload.single('image'), create)
router.get('/photo/delete/:id', findByIdAndDelete)
router.get('/photo', all)

module.exports = router