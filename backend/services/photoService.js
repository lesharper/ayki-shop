const knex = require("../db/knex");


class PhotoService {

    async addPhoto (photos) {
        try {
            return knex('photos').insert(photos)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async getAll () {
        try {
            return knex('photos')
        } catch (err) {
            console.log(err.stack)
        }
    }
}

module.exports = new PhotoService()
