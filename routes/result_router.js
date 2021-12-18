const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/result_controller')
const upload = require('../fileUpload/imageUpload')

router.post('/create/result',upload.single('image'), create)
router.get('/result/delete/:id', findByIdAndDelete)
router.put('/result/:id',upload.single('image'), findByIdAndUpdate)
router.get('/result', all)

module.exports = router