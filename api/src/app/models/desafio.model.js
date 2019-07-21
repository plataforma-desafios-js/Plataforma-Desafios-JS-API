/**
 * Arquivo: models/desafio.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Desafio'
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * === Classe: Desafio ===
 *  id: (number - guid gerado pelo MongoDb)
 *  author: String
 *  titulo: String
 *  content: String
 *  dataInicio: Date
 *  dataFim: Date
 *  participantes: Array<String>
 */

const desafioSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    titulo: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 120,
    },
    texto: {
      type: String,
      required: true,
      minlength: 5,
    },
    dataInicio: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dataFim: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: 'desafio',
  },
);

module.exports = mongoose.model('Desafio', desafioSchema);
