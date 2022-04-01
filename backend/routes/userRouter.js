const Router = require('express')
const userController = require('../controllers/userController')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.get('/logout', userController.logout)


module.exports = router
