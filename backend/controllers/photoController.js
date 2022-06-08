const photoService = require("../services/photoService");


class PhotoController {

    async getAllPhotos(req, res) {
        try {
            const products = await photoService.getAll()
            return res.json(products)
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new PhotoController()
