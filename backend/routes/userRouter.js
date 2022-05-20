const Router = require('express')
const userController = require('../controllers/userController')

const router = new Router()

//Все
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.put('/balance', userController.updateBalance)
router.get('/logout', userController.logout)

//Администратор
router.get('/all', userController.getAllUsers)
router.delete('/remove/:id', userController.deleteUser)
router.put('/update', userController.updateUser)


module.exports = router
