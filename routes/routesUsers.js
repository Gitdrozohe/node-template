const express = require('express');

const app = express();


//Peticion GET (obtener data)
app.get('/usuario', function(req, res) {
    res.json('Que se dice GET');
});

//Peticion POST (crear nuevos registros)
app.post('/usuario', function(req, res) {
    res.json('Que se dice POST');
});

//Peticion PUT (actualizar datos)
app.put('/usuario', function(req, res) {
    res.json('Que se dice PUT');
});


module.exports = app;