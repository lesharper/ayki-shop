const knex = require("../db/knex");


class BasketService {
    async add (basket) {
        try {
            return knex('basket').insert(basket).returning('*')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findByOption(option) {
        try {
            return knex('basket').where(option).first()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAllByOption(option) {
        try {
            return knex('basket').where(option)
                .leftJoin('products', 'basket.product_id', 'products.id')
                .leftJoin('photos', 'photos.product_id', 'products.id')
                .select('basket.*', knex.raw('ARRAY_AGG(photos.id) as photos'), 'products.*')
                .groupBy('basket.user_id','basket.product_id', 'products.id')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete (option) {
        try {
            return knex('basket').where(option).del()
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new BasketService()
