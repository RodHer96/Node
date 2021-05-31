const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./properties').DB;

//Personalizar la consola
const connected = chalk.bold.cyan;
const error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then(() => console.log(connected('Mongo conectado en', dbURL)))
    .catch(() => console.log(error(`Ocurrió un error ${err}`)))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose se ha desconectado');
            process.exit(0)
        });
    });
}
