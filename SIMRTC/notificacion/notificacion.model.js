const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificacionSchema = new Schema({
    tituloNotificacion: {
        type: String,
        required: true
    },
    descripcionNotificacion: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });
module.exports = notificacionSchema;