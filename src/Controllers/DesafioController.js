import Desafio from '../Models/Desafio';
import * as Yup from 'yup';

class DesafioController{
    async index(req, res) {
        const desafios = await Desafio.find({}).sort('-createdAt');
        return res.json(desafios);
    }
    async store(req, res) {
        const schema = Yup.object().shape({
            author: Yup.string().required(),
            titulo: Yup.string().required(),
            content: Yup.string().required(),
            dataFim: Yup.date().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Erro nos campos'
            });
        }
        const existeDesafio = Usuario.findOne({
            titulo: req.body.titulo
        });

        if(existeDesafio){
            return res.status(400).json({
                error: 'Desafio já existe'
            });
        }
        const desafio = await Desafio.create(req.body);
        req.io.emit('desafio', desafio);
        return res.json(desafio);
    }
}

export default new DesafioController();