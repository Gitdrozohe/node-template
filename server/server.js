require('../config/config');


const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');



//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// MIDDLEWARES
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("../routes/routesUsers"));

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public'))); //habilitar la carpeta public
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_



//.......................................................
//  Conectar a la BD Mongo
//.......................................................
mongoose.connect(process.env.URLDBMONGO, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;

    // console.log('Base de datos ONLINE');
    // console.log(res);
});


//.......................................................
//  Iniciar el servidor
//.......................................................

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);

});