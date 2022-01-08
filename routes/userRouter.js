const router = require('express').Router()
const {createUser, createUserPage, userFind, userUpdate} = require('../controllers/user/userController')
const {getLogin, login, logout} = require('../controllers/user/login')
const {roles} = require('../middleware/auth')

router.route('/login',)
    .post(login)
    .get(getLogin)
router.route('/create/user')
    .post(createUser)
    .get(createUserPage)

router.route('/user/:id')
    .get(roles,userFind)
    .put(roles,userUpdate)
    
router.route('/auth/logout',).get(roles,logout)


module.exports = router