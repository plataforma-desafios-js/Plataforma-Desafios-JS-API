/**
 * Arquivo: src/controllers/submissao.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Submissao'
 * Data: 27/06/2019
 * Author: Glaucia Lemos
 */

const Submissao = require('../models/submissao.model');

// Async & Await:

// ==> Método responsável por criar uma nova Submissao:
exports.create = async (req, res) => {
  const novaSubmissao = new Submissao(req.body);
  const submissao = await novaSubmissao.save();
  res.status(200).send({ message: 'Submissao criada com sucesso!', submissao });
};

// ==> Método responsável por selecionar todas as 'Submissao':
exports.findAll = async (req, res) => {
  const submissoes = await Submissao.find({});
  res.status(200).send(submissoes);
};

// ==> Método responsável por selecionar 'Submissao' pelo 'Id':
exports.findById = async (req, res) => {
  const submissao = await Submissao.findById(req.params.id);
  res.status(200).send(submissao);
};

// ==> Método responsável por atualizar 'Submissao' pelo 'Id':
exports.update = async (req, res) => {
  // Validação de campos vazios:
  if (!req.body.usuario || !req.body.link) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios' });
  }

  const submissao = await Submissao.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: 'Submissao atualizada com sucesso!', submissao });
};

// Método responsável por deletar 'Submissao pelo 'Id':
exports.delete = async (req, res) => {
  const submissao = await Submissao.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Submissao excluído com sucesso!', submissao });
};
