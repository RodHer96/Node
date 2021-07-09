const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentoSchema = new Schema({
    nombreDepartamento: {
        type: String,
        required: true
    },
    municipios: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Municipios',
            autopopulate: true,
        }
    ]
},
    {
        timestamps: true
    });
module.exports = municipioSchema;