// @ts-nocheck
/**
 * Arquivo: routes/submissao.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado ao Submissao.
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// ==> Aqui que vai conter as rotas do HTTP da api - submissao

const router = require('express-promise-router')();
const submissaoController = require('../controllers/submissao.controller');

// ==> Definindo as rotas do CRUD - Usuario

// ==> Rota responsável por criar um novo 'Submissao': (POST): localhost:9000/api/submissoes
router.post('/submissoes', submissaoController.create);

// ==> Rota responsável por selecionar todos os 'Submissao': (GET): localhost:9000/api/submissoes/
router.get('/submissoes', submissaoController.findAll);

// ==> Rota responsável por selecionar 'Submissao' pelo 'Id': (GET): localhost:9000/api/submissoes/:id
router.get('/submissoes/:id', submissaoController.findById);

// ==> Rota responsável por atualizar 'Submissao' pelo 'Id': (PUT): localhost: 9000/api/submissoes/:id
router.put('/submissoes/:id', submissaoController.update);

// ==> Rota responsável por excluir 'Submissao' pelo 'Id': (DELETE): localhost:9000/api/submissoes/:id
router.delete('/submissoes/:id', submissaoController.delete);

module.exports = router;
