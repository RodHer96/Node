const mongoose = require('mongoose');
const departamentoSchema = require('./departamento.model');

departamentoSchema.statics = {
    create: function(data, cb) {
        const departamento = new this(data);
        departamento.save(cb);
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

const departamentoModel = mongoose.model('Departamento', departamentoSchema);
module.exports = departamentoModel;