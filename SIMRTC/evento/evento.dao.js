const mongoose = require('mongoose');
const eventoSchema = require('./evento.model');

eventoSchema.statics = {
    create: function(data, cb) {
        const evento = new this(data);
        evento.save(cb);
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

const eventoModel = mongoose.model('Evento', eventoSchema);
module.exports = eventoModel;