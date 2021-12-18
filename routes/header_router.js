const router = require('express').Router()
const {all, create,findByIdAndDelete,findByIdAndUpdate} = require('../controllers/header_controller')

router.post('/create/header', create)
router.get('/header/delete/:id', findByIdAndDelete)
router.put('/header/:id', findByIdAndUpdate)
router.get('/header', all)

module.exports = router