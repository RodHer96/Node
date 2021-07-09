const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rutaSchema = new Schema({
    nombres: {
        type: String,
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