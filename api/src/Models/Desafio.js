
import { Schema, model } from 'mongoose';


const DesafioScheema = new Schema({
  author: String,
  titulo: String,
  content: String,
  dataInicio: {
    type: Date,
    default: Date.now,
  },
  dataFim: {
    type: Date,
    default: Date.now,
  },
  participantes: [
    { type: String },
  ],
});

export default model('Desafio', DesafioScheema);
