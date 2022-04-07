const db = require('../db.js')
const config = require("../config.json");

class UserService {

    async create(name, email, password, sex_id) {
        const query = {
            text: 'INSERT INTO users (name, email, password, sex_id) values ($1, $2, $3, $4) RETURNING *',
            values: [name, email, password, sex_id]
        }
        try {
            const res = await db.query(query)
            return res.rows[0]
        } catch (err) {
            console.log(err.stack)
        }
    }

    async findByEmail(email) {
        const query = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        }
        try {
            const res = await db.query(query)
            return res.rows[0]
        } catch (err) {
            console.log(err.stack)
        }
    }

    async delete(id) {

    }

    async update(id, name, email, password, sex_id) {

    }

}

module.exports = new UserService()
