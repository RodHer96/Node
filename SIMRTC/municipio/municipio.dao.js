const mongoose = require('mongoose');
const municipioSchema = require('./municipio.model');

municipioSchema.statics = {
    create: function(data, cb) {
        const municipio = new this(data);
        municipio.save(cb);
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

const municipioModel = mongoose.model('Municipio', municipioSchema);
module.exports = municipioModel;