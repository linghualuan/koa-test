const Router = require('koa-router')

const router = new Router({prefix: '/users'})

const { userLogin, userRegister } = require('../controller/user.controller')

const { userValidtor, verifyUser } = require('../middleware/user.middleware')

router.post('/register', userValidtor, verifyUser, userRegister)

router.post('/login', userLogin)

module.exports = router