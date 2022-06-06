const Router = require("express");
const sizeController = require("../controllers/sizeController");

const router = new Router()

router.post('/add', sizeController.addSize)
router.get('/all', sizeController.getAllSize)
router.put('/update', sizeController.updateSize)
router.delete('/remove/:id', sizeController.deleteSize)

module.exports = router
