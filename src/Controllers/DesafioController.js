const Desafio = require('../Models/Desafio');

module.exports = {
    async index(req, res){
        const desafios = await Desafio.find({}).sort('-createdAt');

        return res.json(desafios);
    },
    async create(req, res){
        let desafio = await Desafio.create(req.body);
        
        req.io.emit('desafio', desafio);

        return res.json(desafio);
    }
}