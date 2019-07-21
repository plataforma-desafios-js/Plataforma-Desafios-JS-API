/**
 * Arquivo: controllers/session.controller.js
 * Descrição: arquivo responsável pelo controle da Sessão
 * Data: 13/07/2019
 * Author: João Alves
 */

const JWT = require('jsonwebtoken');
const Bcrypt = require('bcrypt');

const Usuario = require('../models/usuario.model');
const AuthConfig = require('../../config/auth');

// Async & Await:

// ==> Método responsável por criar um novo Token:
exports.create = async (req, res) => {
  const { email, senha } = req.body;

  // Validação de campos vazios:
  if (!email || !senha) {
    return res
      .status(400)
      .send({ success: false, message: 'Os campos não podem ser vazios' });
  }

  const usuario = await Usuario.findOne({ email });

  // Verifica se Email já está cadastrado
  if (!usuario) {
    return res
      .status(401)
      .json({ success: false, error: 'E-mail não cadastrado' });
  }

  // Verifica se o Hash da senha é igual a do usuário no BD
  if (!Bcrypt.compareSync(senha, usuario.senha)) {
    return res.status(400).send({ success: false, message: 'Senha incorreta' });
  }

  const { _id, displayName } = usuario;

  return res.status(200).json({
    success: true,
    usuario: {
      _id,
      displayName,
      email,
    },
    token: JWT.sign({ _id }, AuthConfig.secret, {
      expiresIn: AuthConfig.expiresIn,
    }), // Gera o Token para o usuário
  });
};
