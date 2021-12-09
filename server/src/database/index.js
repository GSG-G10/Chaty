const connection = require('./connection');
const { userQueries, chatQueries, messageQueries } = require('./queries');

module.exports = { connection, userQueries, chatQueries, messageQueries };
