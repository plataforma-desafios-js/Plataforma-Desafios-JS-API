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

/* class UsuarioController {
  async index(req, res) {
    const usuarios = await Usuario.find({}).sort('-createdAt');
    return res.status(200).json(
      usuarios,
    );
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      displayName: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required().min(8).max(32),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Erro nos campos',
      });
    }

    let usuarios;
    usuarios = await Usuario.findOne({
      email: req.body.email,
    }, (err, obj) => {

    });

    if (usuarios) {
      return res.status(409).json({
        error: 'Usuário já existe',
      });
    }

    let usuario = req.body;
    usuario.senha = await Bcrypt.hash(usuario.senha, 8);
    usuario = await Usuario.create(req.body);
    return res.status(201).json({
      message: 'Created',
      usuario,
    });
  }


  async update(req, res) {
    const schema = Yup.object().shape({
      displayName: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required().min(8).max(32),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Erro nos campos',
      });
    }
    const id = req.params.id;
    let usuarioExist;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      await Usuario.findById(id, (err, item) => {
        if (err) {
          usuarioExist = null;
        } else {
          usuarioExist = item;
        }
      });
    }
    if (!usuarioExist) {
      return res.status(400).json({
        error: 'Usuário inexistente',
      });
    }
    const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(usuario);
  }

  async show(req, res) {
    const id = req.params.id;
    let usuario;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      await Usuario.findById(id, (err, item) => {
        if (err) {
          usuario = null;
        } else {
          usuario = item;
        }
      });
    }
    if (!usuario) {
      return res.status(400).json({
        error: 'Usuário inexistente',
      });
    }
    res.status(200).json({
      message: 'Deleted',
      usuario,
    });
  }

  async delete(req, res) {
    const id = req.params.id;
    let usuarioExist;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      await Usuario.findById(id, (err, item) => {
        if (err) {
          usuarioExist = null;
        } else {
          usuarioExist = item;
        }
      });
    }
    if (!usuarioExist) {
      return res.status(400).json({
        error: 'Usuário inexistente',
      });
    }
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({
      status: 200,
      message: 'Deleted',
    });
  }
} */
