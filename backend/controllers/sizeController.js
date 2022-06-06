const sizeService = require("../services/sizeService");


class SizeController {

    async addSize(req, res) {
        try {
            const {size} = req.body
            const candidate = await sizeService.findByOption({size})
            if (candidate)
                return res.json({error: 'Размер уже существует'})

            await sizeService.add({size})
            return res.json({message: 'Размер добавлен'})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllSize(req, res, next) {
        try {
            const categories = await sizeService.getAll()
            res.json(categories)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteSize(req, res, next) {
        try {
            const {id} = req.params
            await sizeService.delete(id)
            res.json({messages: `Размер ${id} удален`})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateSize(req, res) {
        try {
            const { id, category } = req.body

            const candidate = await sizeService.findByOption({category})
            if (candidate)
                return res.json({error: 'Размер уже существует'})

            await sizeService.update(id, {category})
            res.json({messages: `Размер ${id} обновлен`})
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new SizeController()
