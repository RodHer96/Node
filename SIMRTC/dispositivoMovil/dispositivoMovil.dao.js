const mongoose = require('mongoose');
const dispositivoMovilSchema = require('./dispositivoMovil.model');

dispositivoMovilSchema.statics = {
    create: function(data, cb) {
        const dispositivo = new this(data);
        dispositivo.save(cb);
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

const dispositivoMovilModel = mongoose.model('DispositivoMovil', dispositivoMovilSchema);
module.exports = dispositivoMovilModel;