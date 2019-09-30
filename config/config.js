//                   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//                                           GLOBALES
//                   - Variables y constantes
//                   - Semillas
//                   - Duracion del token
//                   - Path bd mongo
//                   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 5264;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDBMongo;

if (process.env.NODE_ENV === 'dev') {
    urlDBMongo = 'mongodb://localhost:27017/MEVN';
} else {
    urlDBMongo = process.env.MONGO_URI;
}
process.env.URLDBMONGO = urlDBMongo;