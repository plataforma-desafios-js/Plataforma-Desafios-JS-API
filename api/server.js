/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// ==> Exemplo usando o conceito SOLID

const app = require('./src/app');

const port = process.env.PORT || 9000;

app.listen(port);
console.log('Aplicação executando na porta ', port);
