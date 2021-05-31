const mongoose = require('mongoose');
const tipoVehiculoSchema = require('./tipoVehiculo.model');

tipoVehiculoSchema.statics = {
    create: function(data, cb) {
        const tipoVehiculo = new this(data);
        tipoVehiculo.save(cb);
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
const tipoVehiculoModel = mongoose.model('TipoVehiculo', tipoVehiculoSchema);
module.exports = tipoVehiculoModel;