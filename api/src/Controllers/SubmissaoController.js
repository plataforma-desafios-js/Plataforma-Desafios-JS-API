import Submissao from '../Models/Submissao';
import * as Yup from 'yup';

class SubmissaoController{
    async index(req, res) {
        const submissoes = await Submissao.find({}).sort('-createdAt');
        return res.json(submissoes);
    }
    async store(req, res) {
        const schema = Yup.object().shape({
            usuario: Yup.string().required(),
            link: Yup.string().required()
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Erro nos campos'
            });
        }
        const existeDesafio = Submissao.findOne({
            link: req.body.link
        });

        if(existeDesafio){
            return res.status(400).json({
                error: 'Submissão já existe'
            });
        }

        const submissao = await Submissao.create(req.body);
        req.io.emit('submissao', submissao);
        return res.json(submissao);
    }
}
export default new SubmissaoController();