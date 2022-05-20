const ApiError = require('../error/ApiError')
const productService = require("../services/productService")


class ProductController {
    async addProduct(req, res, next) {
        try {
            const {title, description, price, category_id, sex_id} = req.body
            await productService.add({title, description, price, category_id, sex_id})
            return res.json({message: 'Продукт добавлен'})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAll()
            res.json(products)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getOneProducts(req, res, next) {
        const {id} = req.params
        try {
            const product = await productService.findByOption({id})
            res.json(product)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const {id} = req.params
            await productService.delete(id)
            res.json({messages: `Продукт ${id} удален`})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const { id, title, description, price, category_id, sex_id } = req.body

            const candidate = await productService.findByOption({title, description, price, category_id, sex_id})
            if (candidate)
                return next(ApiError.BAD_REQUEST('Продукт уже существует'))

            await productService.update(id, {title, description, price, category_id, sex_id})
            res.json({messages: `Продукт ${id} обновлен`})
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new ProductController()
