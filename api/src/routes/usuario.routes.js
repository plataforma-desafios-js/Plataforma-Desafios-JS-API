// @ts-nocheck
/**
 * Arquivo: routes/usuario.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado ao Usuario.
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// ==> Aqui que vai conter as rotas do HTTP da api - usuario

const router = require('express-promise-router')();
const usuarioController = require('../controllers/usuario.controller');

// ==> Definindo as rotas do CRUD - Usuario

// ==> Rota responsável por criar um novo 'Usuario': (POST): localhost:9000/api/usuarios
router.post('/usuarios', usuarioController.create);

// ==> Rota responsável por selecionar todos os 'Usuario': (GET): localhost:9000/api/usuarios/
router.get('/usuarios', usuarioController.findAll);

// ==> Rota responsável por selecionar 'Usuario' pelo 'Id': (GET): localhost:9000/api/usuarios/:id
router.get('/usuarios/:id', usuarioController.findById);

// ==> Rota responsável por atualizar 'Usuario' pelo 'Id': (PUT): localhost: 9000/api/usuarios/:id
router.put('/usuarios/:id', usuarioController.update);

// ==> Rota responsável por excluir 'Usuario' pelo 'Id': (DELETE): localhost:9000/api/usuarios/:id
router.delete('/usuarios/:id', usuarioController.delete);

module.exports = router;
