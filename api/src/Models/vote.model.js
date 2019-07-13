/**
 * Arquivo: models/vote.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Vote'
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * === Classe: Vote ===
 *  id: (number - guid gerado pelo MongoDb)
 */

const voteSchema = new Schema({
  // TODO: Incluir as propriedades de 'Vote':
}, {
  timestamps: true, // com timestamp não precisa criar createdAt & updatedAt ;)
  collection: 'vote',
});

module.exports = mongoose.model('Vote', voteSchema);
