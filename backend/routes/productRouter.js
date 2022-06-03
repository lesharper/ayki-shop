const Router = require("express");
const productController = require("../controllers/productController");

const router = new Router()

router.post('/add', productController.addProduct)
router.get('/all', productController.getAllProducts)
router.put('/update', productController.updateProduct)
router.delete('/remove/:id', productController.deleteProduct)

module.exports = router
