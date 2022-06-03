const knex = require("../db/knex");


class CategoryService {
    async add (category) {
        try {
            return knex('categories').insert(category)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findByCategory (category) {
        try {
            return knex('categories').where({category}).first()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAll() {
        try {
            return knex('categories')
                .leftJoin('subcategories', 'subcategories.category_id', 'categories.id')
                .select(['categories.*', knex.raw('ARRAY_AGG(subcategories.subcategory) as subcategories')])
                .groupBy('categories.id')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete (id) {
        try {
            return knex('categories').where({id}).del()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async update(id, data) {
        try {
            return knex('categories').where({id}).update(data)
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new CategoryService()
