const express = require('express');
const app = express();
app.use(express.json());


require('./database.js');

// Rotas
app.use('/usuario', require('../src/routes/usuarioRoutes.js'));
app.use('/carro', require('../src/routes/carroRoutes.js'));
P

app.listen(8000, () => {
    console.log(`Servidor rodando na porta 8000`);
  })