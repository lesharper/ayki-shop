const knex = require("../db/knex");


class ProductService {
    async add (product) {
        try {
            return knex('products').insert(product).returning('*')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findByOption(option) {
        try {
            return knex('products').where(option).first()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAll() {
        try {
            return knex('products')
                .leftJoin('categories', 'products.category_id', 'categories.id')
                .leftJoin('photos', 'photos.product_id', 'products.id')
                .select('categories.category', knex.raw('ARRAY_AGG(photos.id) as photos'), 'products.*')
                .groupBy('categories.category', 'products.id')

        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete (id) {
        try {
            return knex('products').where({id}).del()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async update(id, data) {
        try {
            return knex('products').where({id}).update(data)
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new ProductService()
