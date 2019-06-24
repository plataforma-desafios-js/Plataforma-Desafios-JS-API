
var mongoose = require('mongoose');

var SubmissaoScheema = new mongoose.Schema({
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

module.exports = mongoose.model('Submissao', SubmissaoScheema);