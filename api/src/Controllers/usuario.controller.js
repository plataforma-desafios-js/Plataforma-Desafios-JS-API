/**
 * Arquivo: src/controllers/usuario.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Usuario'
 * Data: 27/06/2019
 * Author: Glaucia Lemos
 */

const Usuario = require('../models/usuario.model');

// Async & Await:

// ==> Método responsável por criar um novo Usuario:
exports.create = async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  const usuario = await novoUsuario.save();
  res.status(200).send({ message: 'Usuário(a) criado(a) com sucesso!', usuario });
};

// ==> Método responsável por selecionar todos os 'Usuários':
exports.findAll = async (req, res) => {
  const usuarios = await Usuario.find({});
  res.status(200).send(usuarios);
};

// ==> Método responsável por selecionar 'Usuário' pelo 'Id':
exports.findById = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.status(200).send(usuario);
};

// ==> Método responsável por atualizar 'Usuário' pelo 'Id':
exports.update = async (req, res) => {
  // Validação de campos vazios:
  if (!req.body.admin || !req.body.displayName || !req.body.senha || !req.body.vitorias) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios' });
  }

  const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: 'Usuário(a) atualizado(a) com sucesso!', usuario });
};

// Método responsável por deletar 'Usuário pelo 'Id':
exports.delete = async (req, res) => {
  const usuario = await Usuario.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Usuário(a) excluído com sucesso!', usuario });
};
