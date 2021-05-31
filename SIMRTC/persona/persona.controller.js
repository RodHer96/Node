const Persona = require('./persona.dao');

exports.createPersona = (req, res, next) => {
    const persona = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fechaNacimiento: req.body.fechaNacimiento,
        dui: req.body.dui,
        direccion: req.body.direccion
    };
    Persona.create(persona, (err, persona) => {
        if(err) res.json({error: err});
        res.json({message: 'Persona creada correctamente'});
    });
}
exports.getPersonas = (req, res, next) => {
    Persona.get({}, (err, personas) => {
        if(err) res.json({error: err});
        res.json({Personas: personas});
    });
}
exports.getPersona = (req, res, next) => {
    Persona.get({_id: req.params.id}, (err, persona) => {
        if(err) res.json({error: err});
        res.json({Persona: persona});
    });
}
exports.updatePersona = (req, res, next) => {
    const persona = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fechaNacimiento: req.body.fechaNacimiento,
        dui: req.body.dui,
        direccion: req.body.direccion
    };
    Persona.update({_id: req.params.id}, persona, (err, persona) => {
        if(err) res.json({error: err});
        res.json({message: 'Persona actualizada correctamente'});
    });
}
exports.removePersona = (req, res, next) => {
    Persona.delete({_id: req.params.id}, (err, persona) => {
        if(err) res.json({error: err});
        res.json({message: 'Persona eliminada correctamente'});
    });
}