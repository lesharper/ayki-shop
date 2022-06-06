const knex = require("../db/knex");


class SizeService {
    async add (size) {
        try {
            return knex('sizes').insert(size)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findByOption (option) {
        try {
            return knex('sizes').where(option).first()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAll() {
        try {
            return knex('sizes')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete (id) {
        try {
            return knex('sizes').where({id}).del()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async update(id, data) {
        try {
            return knex('sizes').where({id}).update(data)
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new SizeService()
