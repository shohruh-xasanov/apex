const router = require('express').Router()
const {all} = require('../controllers/dashboard_controller')

router.get('/dashboard', all)

module.exports = router