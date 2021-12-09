const mongoose = require('mongoose');
require('env2')('.env');

const { DB_URL, DEV_DB_URL, NODE_ENV } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  default:
    throw new Error('DataBase not found ');
}

const connection = () => {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('database connection successful'))
    .catch((err) => console.log(err));
};

module.exports = connection;
