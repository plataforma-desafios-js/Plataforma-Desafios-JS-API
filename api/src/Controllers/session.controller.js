const jwt = require('jsonwebtoken');
const Yup = require('yup');
const Bcrypt = require('bcrypt');

const Usuario = require('../Models/usuario.model');
const AuthConfig = require('../config/auth');

exports.create = async (req, res) => {
  // Validando o body da requisição
  const schema = Yup.object().shape({
    email: Yup.string().required(),
    senha: Yup.string()
      .required()
      .min(8)
      .max(32),
  });

  // Se o modelo do body for diferente ao do schema a função retorna erro
  if (!(await schema.isValid(req.body))) return res.status(400).json({ error: 'Campos insuficientes' });

  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ email });

  if (!usuario) return res.status(401).json({ error: 'E-mail não cadastrado' });

  if (!Bcrypt.compareSync(senha, usuario.senha)) return res.status(400).send({ message: 'Senha incorreta' });

  const { _id, displayName } = usuario;
  return res.json({
    usuario: {
      _id,
      displayName,
      email,
    },
    token: jwt.sign({ _id }, AuthConfig.secret, {
      expiresIn: AuthConfig.expiresIn,
    }),
  });
};
