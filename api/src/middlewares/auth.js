/**
 * Arquivo: src/middlewares/auth.js
 * Descrição: arquivo responsável pela validação da autorização para certas rotas
 * Data: 13/07/2019
 * Author: João Alves
 */
const JWT = require('jsonwebtoken');
const { promisify } = require('util');

const AuthConfig = require('../config/auth');

// Async & Await:

// ==> Método responsável por validar a autorização
exports.auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Valida se foi enviada autorização no Header
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Não Autorizado, necessita de token para o acesso',
    });
  }

  // Exemplo:
  // Authorization: Bearer <token_gerado_pela_session>
  const [, token] = authHeader.split(' '); // 'Bearer', 'TOKEN';

  // Valida o Token enviado
  try {
    // Permite o acesso se o token for válido
    const decoded = await promisify(JWT.verify)(token, AuthConfig.secret);
    req.token = decoded.id;

    return next();
  } catch (err) {
    // Nega o acesso se o Token for inválido
    return res.status(401).json({ success: false, message: 'Token inválido' });
  }
};
