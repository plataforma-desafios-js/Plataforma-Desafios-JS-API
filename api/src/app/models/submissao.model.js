/**
 * Arquivo: models/submissao.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Submissao'
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * === Classe: Submissao ===
 *  id: (number - guid gerado pelo MongoDb)
 *  usuario: String
 *  link: String
 */

const submissaoSchema = new Schema(
  {
    desafio: {
      type: Schema.Types.ObjectId,
      ref: 'Desafio',
      required: true,
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'submissao',
  },
);

module.exports = mongoose.model('Submissao', submissaoSchema);
