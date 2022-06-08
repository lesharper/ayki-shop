const Router = require("express");
const photoController = require("../controllers/photoController");

const router = new Router()

router.get('/all', photoController.getAllPhotos)

module.exports = router
