const mongoose = require('mongoose');
const personaSchema = require('./persona.model');

personaSchema.statics = {
    create: function(data, cb) {
        const persona = new this(data);
        persona.save(cb);
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

const personaModel = mongoose.model('Persona', personaSchema);
module.exports = personaModel;