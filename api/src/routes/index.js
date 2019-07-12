// @ts-nocheck
/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada default da Api da aplicação.
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// const router = require('express-promise-router')();
const router = require('express-promise-router')();
const usuarioController = require('../Controllers/usuario.controller');
const desafioController = require('../Controllers/desafio.controller');
const submissaoController = require('../Controllers/submissao.controller');
const voteController = require('../Controllers/vote.controller');
const sessionController = require('../Controllers/session.controller');

// ==> Rota Default da api: localhost:9000/api
router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja Bem-vindo(a) a API de Desafios JS',
    version: '1.0.0',
  });
});

// === Rotas API: Sessão ===
router.post('/api/session', sessionController.create);

// === Rotas API: Usuario ===

// ==> Rota responsável por criar um novo 'Usuario': (POST): localhost:9000/api/usuarios
router.post('/api/usuarios', usuarioController.create);

// ==> Rota responsável por selecionar todos os 'Usuario': (GET): localhost:9000/api/usuarios/
router.get('/api/usuarios', usuarioController.findAll);

// ==> Rota responsável por selecionar 'Usuario' pelo 'Id': (GET): localhost:9000/api/usuarios/:id
router.get('/api/usuarios/:id', usuarioController.findById);

// ==> Rota responsável por atualizar 'Usuario' pelo 'Id': (PUT): localhost: 9000/api/usuarios/:id
router.put('/api/usuarios/:id', usuarioController.update);

// ==> Rota responsável por excluir 'Usuario' pelo 'Id': (DELETE): localhost:9000/api/usuarios/:id
router.delete('/api/usuarios/:id', usuarioController.delete);

// === Rotas API: Desafio ===

// ==> Rota responsável por criar um novo 'Desafio': (POST): localhost:9000/api/desafios
router.post('/desafios', desafioController.create);

// ==> Rota responsável por selecionar todos os 'Desafio': (GET): localhost:9000/api/desafios/
router.get('/api/desafios', desafioController.findAll);

// ==> Rota responsável por selecionar 'Desafio' pelo 'Id': (GET): localhost:9000/api/desafios/:id
router.get('/api/desafios/:id', desafioController.findById);

// ==> Rota responsável por atualizar 'Desafio' pelo 'Id': (PUT): localhost: 9000/api/desafios/:id
router.put('/api/desafios/:id', desafioController.update);

// ==> Rota responsável por excluir 'Desafio' pelo 'Id': (DELETE): localhost:9000/api/desafios/:id
router.delete('/api/desafios/:id', desafioController.delete);

// === Rotas API: Submissao ===

// ==> Rota responsável por criar um novo 'Submissao': (POST): localhost:9000/api/submissoes
router.post('/api/submissoes', submissaoController.create);

// ==> Rota responsável por selecionar todos os 'Submissao': (GET): localhost:9000/api/submissoes/
router.get('/api/submissoes', submissaoController.findAll);

// ==> Rota responsável por selecionar 'Submissao' pelo 'Id': (GET): localhost:9000/api/submissoes/:id
router.get('/api/submissoes/:id', submissaoController.findById);

// ==> Rota responsável por atualizar 'Submissao' pelo 'Id': (PUT): localhost: 9000/api/submissoes/:id
router.put('/api/submissoes/:id', submissaoController.update);

// ==> Rota responsável por excluir 'Submissao' pelo 'Id': (DELETE): localhost:9000/api/submissoes/:id
router.delete('/api/submissoes/:id', submissaoController.delete);

// === Rotas API: Vote ===

// ==> Rota responsável por criar um novo 'Vote': (POST): localhost:9000/api/votes
router.post('/votes', voteController.create);

// ==> Rota responsável por selecionar todos os 'Submissao': (GET): localhost:9000/api/votes/
router.get('/votes', voteController.findAll);

// ==> Rota responsável por selecionar 'Submissao' pelo 'Id': (GET): localhost:9000/api/votes/:id
router.get('/votes/:id', voteController.findById);

// ==> Rota responsável por atualizar 'Submissao' pelo 'Id': (PUT): localhost: 9000/api/votes/:id
router.put('/votes/:id', voteController.update);

// ==> Rota responsável por excluir 'Submissao' pelo 'Id': (DELETE): localhost:9000/api/votes/:id
router.delete('/votes/:id', voteController.delete);

module.exports = router;
