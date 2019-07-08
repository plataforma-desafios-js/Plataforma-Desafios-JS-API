/**
 * Arquivo: src/app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// ==> Enviroment Variables
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Importando o arquivo: 'database.js'
const localDatabase = require('./db/database');

mongoose.Promise = global.Promise;

// ==> Conexão com a Base de Dados:
mongoose.connect(localDatabase.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('A Base de Dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a base de Dados... ${err}`);
  process.exit();
});

// ==> Rotas
const index = require('./routes/index');
const usuarioRoute = require('./routes/usuario.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

// ==> Usando as Rotas da API:
app.use('/', index);
app.use('/api/', usuarioRoute);

// Socket
/* TODO: Tratar a relação dos status Code & Socket.io
const io = require('socket.io')(server);

app.use((req, res, next) => {
  req.io = io;
  return next();
}); */

module.exports = app;
