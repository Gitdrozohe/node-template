require('../config/config');


const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');



//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// app.use significa que es un middleware...
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

app.use(express.static(path.join(__dirname, '../public')));
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_




app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);

});