const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
    tituloEvento: {
        type: String,
        required: true
    },
    descripcionEvento: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = eventoSchema;