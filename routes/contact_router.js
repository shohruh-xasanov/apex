const router = require('express').Router()
const {all, create,findByIdAndDelete} = require('../controllers/contact_controller')
const {roles} = require('../middleware/auth')

router.post('/create/contact', create)
router.get('/contact/delete/:id',roles, findByIdAndDelete)
router.get('/contact',roles, all)

module.exports = router