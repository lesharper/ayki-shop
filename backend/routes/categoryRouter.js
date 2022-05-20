const Router = require("express");
const categoryController = require("../controllers/categoryController");

const router = new Router()

router.post('/add', categoryController.addCategory)
router.get('/all', categoryController.getAllCategories)
router.put('/update', categoryController.updateCategory)
router.delete('/remove/:id', categoryController.deleteCategory)

module.exports = router
