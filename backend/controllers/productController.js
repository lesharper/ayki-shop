const ApiError = require('../error/ApiError')
const productService = require("../services/productService")
const photoService = require("../services/photoService")
const uuid = require('uuid')
const path = require("path");

class ProductController {
    async addProduct(req, res) {
        try {
            const {title, description, price, category_id, sex_id} = req.body
            const {photos} = req.files

            let images = []

            console.log(photos)

            const products = await productService.add({title, description, price, category_id, sex_id})
            let product_id = products[0].id

            for (let i in photos) {
                let fileName = uuid.v4() + `.${photos[i].mimetype.split('/')[1]}`

                photos[i].mv(path.resolve(__dirname, '..', 'static', fileName))

                images.push({image: fileName, product_id})
            }

            await photoService.addPhoto(images)

            return res.json({message: 'Продукт добавлен'})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllProducts(req, res) {
        try {
            const products = await productService.getAll()
            return res.json(products)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteProduct(req, res) {
        try {
            const {id} = req.params
            await productService.delete(id)
            return res.json({messages: `Продукт ${id} удален`})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const { id, title, description, price, category_id, sex_id } = req.body

            const candidate = await productService.findByOption({title, description, price, category_id, sex_id})
            if (candidate)
                return  res.json({error: `Продукт уже существует`})

            await productService.update(id, {title, description, price, category_id, sex_id})

            return res.json({messages: `Продукт ${id} обновлен`})
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new ProductController()
