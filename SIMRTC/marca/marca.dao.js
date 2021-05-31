const mongoose = require('mongoose');
const marcaSchema = require('./marca.model');

marcaSchema.statics = { 
    create: function(data, cb) {
        const marca = new this(data);
        marca.save(cb);
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

const marcaModel = mongoose.model('Marca', marcaSchema);
module.exports = marcaModel;