// O ideal é ter uma rota para cada model 
const express = require('express');
const route = express.Router();

const Usuario =  require('../models/usuario');


route.post('/', async (req, res) => {
    // req, dados da requisão e o res objeto que tem diversas funções
    
    try{
        const usuario = await new Usuario(req.body).save();
        res.json({error: false, usuario});

    }catch(err){
        res.json({error: true, message: err.message})
    }
    
});

route.put('/:id', async (req, res) => {
    try{
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.json({error: false, usuario});
    }catch(err){
        res.json({error:true, message: err.message});
    }
});

// Delete


route.delete('/:id', async (req, res) => {
    try{
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.json({error: false, });
    }catch(err){
        res.json({error:true, message: err.message});
    }
});



module.exports =  route;