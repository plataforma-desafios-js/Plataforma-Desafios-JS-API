/**
 * Arquivo: models/usuario.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Usuario' da aplicação.
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * === Classe: Usuario ===
 *  id: (number - guid gerado pelo MongoDb)
 *  admin: boolean
 *  displayName: String
 *  email: String
 *  senha: String
 *  vitorias: Number
 *  medalhas: Array<String>
 */

const usuarioSchema = new Schema(
  {
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
      min: 8,
      max: 32,
    },
    vitorias: {
      type: Number,
      required: true,
      default: 0,
    },
    medalhas: [{ type: String }],
  },
  {
    timestamps: true, // com timestamp não precisa criar createdAt & updatedAt ;)
    collection: 'usuario',
  },
);

module.exports = mongoose.model('Usuario', usuarioSchema);
