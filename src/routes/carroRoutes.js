// O ideal é ter uma rota para cada model 
const express = require('express');
const route = express.Router();

const Carro =  require('../models/carro');


route.post('/', async (req, res) => {
    // req, dados da requisão e o res objeto que tem diversas funções
    try{
        const carro = await new Carro(req.body).save();
        res.json({error: false, carro});

    }catch(err){
        res.json({error: true, message: err.message})
    }
    
});

route.get('/', async (req, res) =>{
    try{
        const carros = await Carro.find();
        res.json({error: false, carros});

    }catch(err){
        res.json({error: true, message: err.message})
    }
    
});
route.get('/:id', async (req, res) =>{
    try{
        const carro = await Carro.findById(req.params.id).populate('usuarioId',
            'name email'  // como se fosse um select
        ); // o populate faz a busca da chave estrangeira, busca o usario 
        res.json({error: false, carro});

    }catch(err){
        res.json({error: true, message: err.message})
    }
    
});

// update de carro 

route.put('/:id', async (req, res) => {
    try{
    const carro = await Carro.findByIdAndUpdate(req.params.id, req.body);
    res.json({error: false, carro});
    }catch(err){
        res.json({error:true, message: err.message});
    }
});

// Delete


route.delete('/:id', async (req, res) => {
    try{
    const carro = await Carro.findByIdAndDelete(req.params.id);
    res.json({error: false, });
    }catch(err){
        res.json({error:true, message: err.message});
    }
});

module.exports =  route;