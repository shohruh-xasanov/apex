const router = require('express').Router()
const {main} = require('../controllers/main/main_controller')

router.get('/', main)

module.exports = router