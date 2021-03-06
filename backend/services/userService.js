const knex = require('../db/knex')

class UserService {

    async create(name, email, password, sex_id) {
        try {
            const rows = await knex('users').insert({name, email, password, sex_id}).returning('*')
            return rows[0]
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findByOption(option) {
        try {
            return knex('users').where(option).first()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAll() {
        try {
            return knex('users')
        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete(id) {
        try {
            return knex('users').where({id}).del()
        } catch (err) {
            console.log(err.stack)
        }
    }

    async update(id, data) {
        try {
            return knex('users').where({id}).update(data)
        } catch (err) {
            console.log(err.stack)
        }
    }

}

module.exports = new UserService()
