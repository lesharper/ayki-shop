const productService = require("../services/productService")
const basketService = require("../services/basketService")

class BasketController {

    async addInBasket(req, res) {
        try {
            const user_id = req.session.user.id

            if (!user_id) {
                return res.json({error: 'Ошибка авторизации'})
            }

            const {product_id} = req.body

            const product = await productService.findByOption({id: product_id})
            const candidate = await basketService.findByOption({user_id, product_id})

            if (!product) return res.json({error: 'Продукта не существует'})
            if (candidate) return res.json({error: 'Товар уже добавлен'})


            await basketService.add({user_id, product_id})

            return res.json({message: 'Продукт добавлен в корзину'})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllProductsByUser (req, res) {
        try {
            const user_id = req.session.user.id

            if (!user_id) {
                return res.json([])
            }

            const basket = await basketService.getAllByOption({user_id})

            return res.json(basket)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteFromBasket(req, res) {
        try {
            const user_id = req.session.user.id

            if (!user_id) {
                return res.json({error: 'Ошибка авторизации'})
            }

            const {id} = req.params
            await basketService.delete({user_id, product_id: id})
            return res.json({messages: `Продукт ${id} удален`})
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new BasketController()
