const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dispositivoMovilSchema = new Schema({
    marca: {
        type: String,
        required: true
    },
    imei: {
        type: String,
        unique: true,
        required: true,
        maxlength: 15,
        minlength: 15
    }
},
    {
        timestamps: true
    });
module.exports = dispositivoMovilSchema;