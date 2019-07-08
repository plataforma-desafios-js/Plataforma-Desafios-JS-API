// @ts-nocheck
/**
 * Arquivo: routes/desafio.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado ao Desafio.
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// ==> Aqui que vai conter as rotas do HTTP da api - Desafio

const router = require('express-promise-router')();
const desafioController = require('../controllers/desafio.controller');

// ==> Definindo as rotas do CRUD - Desafio

// ==> Rota responsável por criar um novo 'Desafio': (POST): localhost:9000/api/desafios
router.post('/desafios', desafioController.create);

// ==> Rota responsável por selecionar todos os 'Desafio': (GET): localhost:9000/api/desafios/
router.get('/desafios', desafioController.findAll);

// ==> Rota responsável por selecionar 'Desafio' pelo 'Id': (GET): localhost:9000/api/desafios/:id
router.get('/desafios/:id', desafioController.findById);

// ==> Rota responsável por atualizar 'Desafio' pelo 'Id': (PUT): localhost: 9000/api/desafios/:id
router.put('/desafios/:id', desafioController.update);

// ==> Rota responsável por excluir 'Desafio' pelo 'Id': (DELETE): localhost:9000/api/desafios/:id
router.delete('/desafios/:id', desafioController.delete);

module.exports = router;
