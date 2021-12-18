const router = require('express').Router()
const {all, create,findByIdAndDelete} = require('../controllers/student_controller')
const {roles} = require('../middleware/auth')

router.post('/create/student', create)
router.get('/student/delete/:id',roles, findByIdAndDelete)
router.get('/student',roles, all)

module.exports = router