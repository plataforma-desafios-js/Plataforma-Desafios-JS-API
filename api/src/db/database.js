/**
 * Arquivo: db/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: MongoDb.
 * Data: 23/06/2019
 * Author: Glaucia Lemos
 */
require('dotenv/config');

module.exports = {
  local: {
    url: 'mongodb://localhost:27017/api-crud',
  },
  production: {
    url: process.env.CONNECTION_STRING,
  },
};
