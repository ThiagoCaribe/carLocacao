const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario', { 
    
    name: {
        type: String,
        required: true
    },
    email: String,
    senha: {
        type: String,
        required: () => {
            return  this.idade > 16;
        }
    },
    idade: Number,
    corOlhos:{
        type: String,
        enum: ['azul', 'preto', 'marron'], // so permite os valores que estão dentro do conchetes
        required: true
    },
    status: Boolean,
    habilidade: Array, // [apenas teste]
    outro: Object,

});

module.exports = Usuario;