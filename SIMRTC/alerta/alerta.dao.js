const mongoose = require('mongoose');
const alertaSchema = require('./alerta.model');

alertaSchema.statics = {
    create: function(data, cb) {
        const alerta = new this(data);
        alerta.save(cb);
    },
    get: function(query, cb) {
        this.find(query, cb);
    },
    getByName: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findByIdAndUpdate(query, {$set: updateData}, {new: true},  cb);
    },
    delete: function(query, cb) {
        this.findByIdAndDelete(query, cb);
    }
}

const alertaModel = mongoose.model('Alerta', alertaSchema);
module.exports = alertaModel;