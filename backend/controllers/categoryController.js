const ApiError = require('../error/ApiError')
const categoryService = require("../services/categoryService")


class CategoryController {
    async addCategory(req, res, next) {
        try {
            const {category} = req.body
            const candidate = await categoryService.findByCategory(category)
            if (candidate)
                return next(ApiError.BAD_REQUEST('Категория уже существует'))

            await categoryService.add({category})
            return res.json({message: 'Категория добавлена'})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllCategories(req, res, next) {
        try {
            const categories = await categoryService.getAll()
            res.json(categories)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteCategory(req, res, next) {
        try {
            const {id} = req.params
            await categoryService.delete(id)
            res.json({messages: `Категория ${id} удалена`})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateCategory(req, res, next) {
        try {
            const { id, category } = req.body

            const candidate = await categoryService.findByCategory(category)
            if (candidate)
                return next(ApiError.BAD_REQUEST('Категория уже существует'))

            await categoryService.update(id, {category})
            res.json({messages: `Категория ${id} обновлена`})
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new CategoryController()
