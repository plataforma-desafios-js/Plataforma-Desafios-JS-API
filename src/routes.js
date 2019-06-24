  
const express = require('express');

const routes = express.Router();
// Importando Controllers
const DesafioController = require('./Controllers/DesafioController');
const UsuarioController = require('./Controllers/UsuarioController');
const SubmissaoController = require('./Controllers/SubmissaoController');
const VoteController = require('./Controllers/VoteController');


routes.get('/', (req, res) => {
    return res.send("Hello World");
});

routes.get('/desafios', DesafioController.index);
routes.post('/desafios', DesafioController.create);


routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);

routes.get('/usuarios', SubmissaoController.index);
routes.post('/usuarios', SubmissaoController.create);





module.exports = routes;