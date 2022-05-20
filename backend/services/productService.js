const knex = require("../db/knex");


class ProductService {
    async add (product) {
        try {
            return knex('products').insert(product)
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
            return knex('categories').innerJoin('products', 'products.category_id', 'categories.id')
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
