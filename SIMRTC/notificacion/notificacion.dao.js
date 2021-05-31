const mongoose = require('mongoose');
const notificacionSchema = require('./notificacion.model');

notificacionSchema.statics = {
    create: function(data, cb) {
        const notificacion = new this(data)
        notificacion.save(cb);
    },
    get: function(query, cb) {
        this.find(query, cb);
    },
    getByName: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findByIdAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },
    delete: function(query, cb) {
        this.findByIdAndDelete(query, cb);
    }
}
const notificacionModel = mongoose.model('Notificacion', notificacionSchema);
module.exports = notificacionModel;