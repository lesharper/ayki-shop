const knex = require("../db/knex");


class SubcategoryService {
    async add (subcategory) {
        try {
            return knex('subcategories').insert(subcategory)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findBySubcategory (subcategory) {
        try {
            return knex('subcategories').where(subcategory).first()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAll() {
        try {
            return knex('subcategories')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete (id) {
        try {
            return knex('subcategories').where({id}).del()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async update(id, data) {
        try {
            return knex('subcategories').where({id}).update(data)
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new SubcategoryService()
