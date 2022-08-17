const create = require('./create')
const update = require('./update')
const deleteActivity = require('./delete')
const get = require('./get');
const getAll = require('./getAll')

module.exports = {
    getAll,
    get,
    create,
    update,
    deleteActivity
}