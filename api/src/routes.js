  
import express from 'express';


// Importando Controllers
import DesafioController from './Controllers/DesafioController';
import UsuarioController from './Controllers/UsuarioController';
import SubmissaoController from './Controllers/SubmissaoController';
import VoteController from './Controllers/VoteController';

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

routes.get('/desafios', DesafioController.index);
routes.post('/desafios', DesafioController.store);


routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);
routes.get('/usuarios/:id', UsuarioController.show);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.get('/submissoes', SubmissaoController.index);
routes.post('/submissoes', SubmissaoController.store);





module.exports = routes;