/**
 * Arquivo: src/controllers/vote.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Vote'
 * Data: 27/06/2019
 * Author: Glaucia Lemos
 */

const Vote = require('../Models/vote.model');

// Async & Await:

// ==> Método responsável por criar um novo Vote:
exports.create = async (req, res) => {
  const novoVote = new Vote(req.body);
  const vote = await novoVote.save();
  res.status(200).send({ message: 'Vote criado com sucesso!', vote });
};

// ==> Método responsável por selecionar todos os 'Votes':
exports.findAll = async (req, res) => {
  const votes = await Vote.find({});
  res.status(200).send(votes);
};

// ==> Método responsável por selecionar 'Vote' pelo 'Id':
exports.findById = async (req, res) => {
  const vote = await Vote.findById(req.params.id);
  res.status(200).send(vote);
};

// ==> Método responsável por atualizar 'Vote' pelo 'Id':
exports.update = async (req, res) => {
  // Validação de campos vazios:
  // TODO: Incluir os campos obrigatórios aqui!!!
  /* if (!req.body. || !req.body. || !req.body. || !req.body.) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios' });
  } */

  const vote = await Vote.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: 'Vote atualizado com sucesso!', vote });
};

// Método responsável por deletar 'Vote' pelo 'Id':
exports.delete = async (req, res) => {
  const vote = await Vote.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Vote excluído com sucesso!', vote });
};
