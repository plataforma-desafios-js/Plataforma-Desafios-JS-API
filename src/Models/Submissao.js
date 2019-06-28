
import { Schema, model } from 'mongoose';

var SubmissaoScheema = new Schema({
    usuario: String,
    link: String,
    votes_count: {
        type: Number,
        default: 0
    },
    votes: [
        {type:String}
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Submissao', SubmissaoScheema);