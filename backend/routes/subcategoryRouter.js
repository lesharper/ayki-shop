const Router = require("express");
const subcategoryController = require("../controllers/subcategoryController");

const router = new Router()

router.post('/add', subcategoryController.addSubcategory)
router.get('/all', subcategoryController.getAllSubcategories)
router.put('/update', subcategoryController.updateSubcategory)
router.delete('/remove/:id', subcategoryController.deleteSubcategory)

module.exports = router
