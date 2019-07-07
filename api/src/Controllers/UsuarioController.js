import Usuario from '../Models/Usuario';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

class UsuarioController {
    async index(req, res) {
        const usuarios = await Usuario.find({}).sort('-createdAt');
        return res.status(200).json(
            usuarios
        );
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            displayName: Yup.string().required(),
            email: Yup.string().required(),
            senha: Yup.string().required().min(8).max(32)
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Erro nos campos'
            });
        }

        let usuarios;
        usuarios = await Usuario.findOne({
            email: req.body.email
        }, (err, obj) => {

        });

        if (usuarios) {
            return res.status(409).json({
                error: 'Usuário já existe'
            });
        }

        let usuario = req.body;
        usuario.senha = await bcrypt.hash(usuario.senha, 8);
        usuario = await Usuario.create(req.body);
        return res.status(201).json({
            message: 'Created',
            usuario
        });
    }


    async update(req, res) {
        const schema = Yup.object().shape({
            displayName: Yup.string().required(),
            email: Yup.string().required(),
            senha: Yup.string().required().min(8).max(32)
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Erro nos campos'
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
                error: 'Usuário inexistente'
            });
        }
        let usuario = await Usuario.findByIdAndUpdate(id, req.body, {new: true});
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
                error: 'Usuário inexistente'
            });
        } else {
            res.status(200).json({
                message: "Deleted",
                usuario
            });
        }
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
                error: 'Usuário inexistente'
            });
        }
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            message: "Deleted"
        });
    }

}
export default new UsuarioController();