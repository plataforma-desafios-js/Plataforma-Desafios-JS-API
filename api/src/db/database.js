/**
 * Arquivo: db/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: MongoDb.
 * Data: 23/06/2019
 * Author: Glaucia Lemos
 */
require('dotenv/config');

module.exports = {
  local: {
    url: process.env.LOCAL_CONNECTION_STRING,
  },
  production: {
    url: process.env.PRODUCTION_CONNECTION_STRING,
  },
};
