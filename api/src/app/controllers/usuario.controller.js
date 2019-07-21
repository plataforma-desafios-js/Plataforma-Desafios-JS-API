/**
 * Arquivo: src/controllers/usuario.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Usuario'
 * Data: 27/06/2019
 * Author: Glaucia Lemos
 */

const Bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.model');

// Async & Await:

// ==> Método responsável por criar um novo Usuario:
exports.create = async (req, res) => {
  const { displayName, email, senha } = req.body;
  // Validação de campos vazios:
  if (!displayName || !email || !senha) {
    return res
      .status(400)
      .send({ success: false, message: 'Os campos não podem ser vazios' });
  }

  // Apagando Atributo de Admin do body
  delete req.body.admin;

  // Validando email
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(email)) {
    return res
      .status(400)
      .send({ success: false, error: 'Email mal formatado' });
  }

  // Encriptando senha
  req.body.senha = Bcrypt.hashSync(senha, 10);

  const novoUsuario = new Usuario(req.body);

  await novoUsuario.save((err, usuario) => {
    // Verificando se houve erros ao adicionar os dados
    if (err) {
      // Verificando se o email já está cadastrado
      if (err.name === 'MongoError' && err.code === 11000) {
        // Se estiver cadastrado
        return res
          .status(422)
          .send({ succes: false, message: 'Usuário já cadastrado!' });
      }
      return res.status(422).send({ succes: false, message: err.message });
    }

    // Se não houver problemas
    return res.status(200).send({
      succes: true,
      usuario,
    });
  });
};

// ==> Método responsável por selecionar todos os 'Usuários':
exports.findAll = async (req, res) => {
  const usuarios = await Usuario.find({});
  res.status(200).send(usuarios);
};

// ==> Método responsável por selecionar 'Usuário' pelo 'Id':
exports.findById = async (req, res) => {
  const { id } = req.params;

  // Validando o id
  if (!id.match(/^[a-fA-F0-9]{24}$/)) {
    return res.status(400).send({ success: false, error: 'ID mal formatado' });
  }

  await Usuario.findById(id, (err, usuario) => {
    if (err) {
      return res.status(400).send({ success: false, message: err.message });
    }
    if (!usuario) {
      return res
        .status(404)
        .send({ success: false, message: 'Usuário não encontrado' });
    }

    return res.status(200).send({ success: true, usuario });
  });
};

// ==> Método responsável por atualizar 'Usuário' pelo 'Id':
exports.update = async (req, res) => {
  const { id } = req.params;

  // Validando o id
  if (!id.match(/^[a-fA-F0-9]{24}$/)) {
    return res.status(400).send({ success: false, error: 'ID mal formatado' });
  }

  const {
    displayName, senha, email, vitorias,
  } = req.body;

  // Validação de campos vazios:
  if (!displayName || !senha || !vitorias) {
    return res
      .status(400)
      .send({ success: false, message: 'Os campos não podem ser vazios' });
  }

  // Validando email
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(email)) {
    return res
      .status(400)
      .send({ success: false, error: 'Email mal formatado' });
  }

  // Apagando Atributo de Admin do body
  delete req.body.admin;

  // Encriptando senha
  req.body.senha = Bcrypt.hashSync(req.body.senha, 10);

  await Usuario.findOneAndUpdate(
    { _id: id, email }, // Usuário só pode mudar se seu email e id estiverem certos
    req.body,
    { new: true },
    (err, usuario) => {
      if (err) {
        return res.status(400).send({ success: false, message: err.message });
      }
      if (!usuario) {
        return res
          .status(404)
          .send({ success: false, message: 'Usuário não encontrado' });
      }

      return res.status(200).send({
        success: true,
        usuario,
      });
    },
  );
};

// Método responsável por deletar 'Usuário pelo 'Id':
exports.delete = async (req, res) => {
  const { id } = req.params;

  // Validando o id
  if (!id.match(/^[a-fA-F0-9]{24}$/)) {
    return res.status(400).send({ success: false, error: 'ID mal formatado' });
  }

  await Usuario.findByIdAndRemove(id, (err, usuario) => {
    if (err) {
      return res.status(400).send({ success: false, message: err.message });
    }
    if (!usuario) {
      return res
        .status(404)
        .send({ success: false, message: 'Usuário não encontrado' });
    }

    return res.status(200).send({
      success: true,
      message: 'Usuário(a) excluído com sucesso!',
      usuario,
    });
  });
};
