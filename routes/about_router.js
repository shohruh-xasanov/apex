const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/about_controller')

router.post('/create/about', create)
router.get('/about/delete/:id', findByIdAndDelete)
router.put('/about/:id', findByIdAndUpdate)
router.get('/about', all)

module.exports = router