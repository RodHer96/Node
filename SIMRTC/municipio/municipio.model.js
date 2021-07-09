const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const municipioSchema = new Schema({
    nombreMunicipio: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = municipioSchema;