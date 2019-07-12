/**
 * Arquivo: models/submissao.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Submissao'
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * === Classe: Submissao ===
 *  id: (number - guid gerado pelo MongoDb)
 *  usuario: String
 *  link: String
 *  votes_count: String
 *  votes: Array<String>
 */

const submissaoSchema = new Schema(
  {
    usuario: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    votes_count: {
      type: Number,
      default: 0
    },
    votes: [{ type: String }]
  },
  {
    timestamps: true,
    collection: "submissao"
  }
);

module.exports = mongoose.model("Submissao", submissaoSchema);
