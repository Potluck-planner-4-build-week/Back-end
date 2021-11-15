const db = require('../data/db-config');

module.exports = { 
    find,
    findById,
    findByUsername,
}

function find() {
    return db('users as u')
        .join('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name')
}

function findById(id) {
    return db('users as u')
        .join('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name')
        .where('u.user_id', id).first()
}

function findByUsername(username) {
    return db('users')        
    .join('roles as r', 'u.role_id', 'r.role_id')
    .select('u.user_id', 'u.username', 'r.role_name')
    .where('u.username', username).first()
}