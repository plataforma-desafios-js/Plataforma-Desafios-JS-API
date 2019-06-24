const Usuario = require('../Models/Usuario');

module.exports = {
    async index(req, res){
        const usuarios = await Usuario.find({}).sort('-createdAt');

        return res.json(usuarios);
    },
    async create(req, res){
        let usuario = await Usuario.create(req.body);
        
        const date = new Date();
        usuario.updatedAt = date.now();

        return res.json(usuario);
    }
}