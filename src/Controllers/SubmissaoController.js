const Submissao = require('../Models/Submissao');

module.exports = {
    async index(req, res){
        const submissoes = await Submissao.find({}).sort('-createdAt');

        return res.json(submissoes);
    },
    async create(req, res){
        let submissao = await Submissao.create(req.body);
        
        req.io.emit('submissao', submissao);

        return res.json(submissao);
    }
}