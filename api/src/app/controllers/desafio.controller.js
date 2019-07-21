/**
 * Arquivo: src/controllers/desafio.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Desafio'
 * Data: 27/06/2019
 * Author: Glaucia Lemos
 */

const Desafio = require('../models/desafio.model');

// Async & Await:

// ==> Método responsável por criar um novo Desafio:
exports.create = async (req, res) => {
  const novoDesafio = new Desafio(req.body);
  const desafio = await novoDesafio.save();
  res
    .status(200)
    .send({ message: 'Desafio(a) criado(a) com sucesso!', desafio });
};

// ==> Método responsável por selecionar todos os 'Desafios':
exports.findAll = async (req, res) => {
  const desafios = await Desafio.find({});
  res.status(200).send(desafios);
};

// ==> Método responsável por selecionar 'Desafio' pelo 'Id':
exports.findById = async (req, res) => {
  const desafio = await Desafio.findById(req.params.id);
  res.status(200).send(desafio);
};

// ==> Método responsável por atualizar 'Desafio' pelo 'Id':
exports.update = async (req, res) => {
  // Validação de campos vazios:
  if (
    !req.body.author
    || !req.body.titulo
    || !req.body.content
    || !req.body.dataInicio
    || !req.body.dataFim
  ) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios' });
  }

  const desafio = await Desafio.findByIdAndUpdate(req.params.id, req.body);
  res
    .status(200)
    .send({ message: 'Desafio(a) atualizado(a) com sucesso!', desafio });
};

// Método responsável por deletar 'Desafio pelo 'Id':
exports.delete = async (req, res) => {
  const desafio = await Desafio.findByIdAndRemove(req.params.id);
  res
    .status(200)
    .send({ message: 'Desafio(a) excluído com sucesso!', desafio });
};
