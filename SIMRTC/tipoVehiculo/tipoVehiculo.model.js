const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoVehiculoSchema = new Schema({
    nombreTipo: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = tipoVehiculoSchema;