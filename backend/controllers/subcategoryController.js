const ApiError = require('../error/ApiError')
const subcategoryService = require("../services/subcategoryService")


class SubcategoryController {

    async addSubcategory(req, res, next) {
        try {
            const {subcategory, category_id} = req.body
            const candidate = await subcategoryService.findBySubcategory({subcategory})
            if (candidate)
                return res.json({error: 'Подкатегория уже существует'})

            await subcategoryService.add({subcategory, category_id})
            return res.json({message: 'Подкатегория добавлена'})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllSubcategories(req, res, next) {
        try {
            const categories = await subcategoryService.getAll()
            res.json(categories)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteSubcategory(req, res, next) {
        try {
            const {id} = req.params
            await subcategoryService.delete(id)
            res.json({messages: `Подкатегория ${id} удалена`})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateSubcategory(req, res, next) {
        try {
            const { id, subcategory } = req.body

            const candidate = await subcategoryService.findBySubcategory(subcategory)
            if (candidate)
                return next(ApiError.BAD_REQUEST('Подкатегория уже существует'))

            await subcategoryService.update(id, {subcategory})
            res.json({messages: `Подкатегория ${id} обновлена`})
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new SubcategoryController()
