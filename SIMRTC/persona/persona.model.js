const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    dui: {
        type: String,
        unique: true,
        maxlength: 10,
        minlength: 10,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = personaSchema;