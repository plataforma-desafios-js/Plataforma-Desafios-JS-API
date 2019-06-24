
var mongoose = require('mongoose');

var UsuarioScheema = new mongoose.Schema({
    admin: {
        type: Boolean,
        default: false
    },
    displayName: String,
    username: String,
    email: String,
    senha: String,
    photo: String,
    vitorias: {
        type: Number,
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

module.exports = mongoose.model('Usuario', UsuarioScheema);