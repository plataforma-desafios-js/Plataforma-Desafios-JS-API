
import { Schema, model } from 'mongoose';

var UsuarioScheema = new Schema({
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    senha: {
        type: String,
        required: true,
    },
    vitorias: {
        type: Number,
        required: true,
        default: 0
    },
    medalhas: [
        {type: String}
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

export default model('Usuario', UsuarioScheema);
