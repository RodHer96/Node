const Municipio = require('./municipio.dao');

exports.createMunicipio = (req, res, next) => {
    const municipio = {
        nombreMunicipio: req.body.nombre
    };
    Municipio.create(municipio, (err, municipio) => {
        if(err) res.json({error: err});
        res.json({message: 'Municipio creado correctamente'});
    });
}
exports.getMunicipios = (req, res, next) => {
    Municipio.get({}, (err, municipios) => {
        if(err) res.json({error: err});
        res.json({Municipios: municipios});
    });
}
exports.getMunicipio = (req, res, next) => {
    Municipio.get({_id: req.params.id}, (err, municipio) => {
        if(err) res.json({error: err});
        res.json({Municipio: municipio});
    });
}
exports.updateMunicipio = (req, res, next) => {
    const municipio = {
        nombreMunicipio: req.body.nombre
    };
    Municipio.update({_id: req.params.id}, municipio, (err, municipio) => {
        if(err) res.json({error: err});
        res.json({message: 'Municipio actualizado correctamente'});
    });
}
exports.removeMunicipio = (req, res, next) => {
    Municipio.delete({_id: req.params.id}, (err, municipio) => {
        if(err) res.json({error: err});
        res.json({message: 'Municipio eliminado correctamente'});
    });
}