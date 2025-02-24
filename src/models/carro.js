const mongoose = require('mongoose')
const Carro = mongoose.model('Carro', { 

    // declarando relacionanmento, e relacionando com o mongoose 
    
    usuarioId: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
    },
    placa: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
});

module.exports = Carro;