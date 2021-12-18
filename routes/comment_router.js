const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/comment_controller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/comment',upload.single('image'), create)
router.get('/comment/delete/:id', findByIdAndDelete)
router.put('/comment/:id',upload.single('image'), findByIdAndUpdate)
router.get('/comment', all)

module.exports = router