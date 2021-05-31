const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertaSchema = new Schema({
    tituloAlerta: {
        type: String,
        required: true
    },
    descripcionAlerta: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = alertaSchema;