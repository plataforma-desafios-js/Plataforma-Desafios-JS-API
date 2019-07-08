/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada default da Api da aplicação.
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja Bem-vindo(a) a API de Desafios JS',
    version: '1.0.0',
  });
});

module.exports = router;
