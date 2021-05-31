const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marcaSchema = new Schema({
    nombreMarca: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = marcaSchema;
 