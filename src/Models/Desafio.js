var date = new Date();
date.setDate(date.getDate() + 7);

var mongoose = require('mongoose');

var DesafioScheema = new mongoose.Schema({
    author: String,
    titulo: String,
    content: String,
    dataInicio: {
        type: Date,
        default: Date.now
    },
    dataFim: {
        type: Date,
        default: date
    },
    participantes: [
        {type:String}
    ],
});

module.exports = mongoose.model('Desafio', DesafioScheema);