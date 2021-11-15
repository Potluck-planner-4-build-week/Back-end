const db = require('../data/db-config');

module.exports = { 
    find,
    findBy,
    findById,
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users as u').where('u.user_id', id)
}

function findBy(filter) {
    return db('users').where(filter)
}