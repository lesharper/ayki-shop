const Router = require("express");
const basketController = require("../controllers/basketController");

const router = new Router()

router.post('/add', basketController.addInBasket)
router.get('/all', basketController.getAllProductsByUser)
router.delete('/remove/:id', basketController.deleteFromBasket)

module.exports = router
