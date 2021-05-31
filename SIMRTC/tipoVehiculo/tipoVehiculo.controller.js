const TipoVehiculo = require('./tipoVehiculo.dao');

exports.createTipoVehiculo = (req, res, next) => {
    const tipoVehiculo = {
        nombreTipo: req.body.name,
    };
    TipoVehiculo.create(tipoVehiculo, (err, tipoVehiculo) => {
        if(err) res.json({error: err});
        res.json({message: 'Tipo de vehículo creado correctamente'});
    });
}
exports.getTipoVehiculos = (req, res, next) => {
    TipoVehiculo.get({}, (err, tipoVehiculos) => {
        if(err) res.json({error: err});
        res.json({TipoVehiculos: tipoVehiculos});
    });
}
exports.getTipoVehiculo = (req, res, next) => {
    TipoVehiculo.get({nombreTipo: req.params.name}, (err, tipoVehiculo) => {
        if(err) res.json({error: err});
        res.json({TipoVehiculo: tipoVehiculo});
    });
}
exports.updateTipoVehiculo = (req, res, next) => {
    const tipoVehiculo = {
        nombreTipo: req.body.name,
    };
    TipoVehiculo.update({_id: req.params.id}, tipoVehiculo, (err, tipoVehiculo) => {
        if(err) res.json({error: err});
        res.json({message: 'Tipo de vehículo actualizado correctamente'});
    });
}
exports.removeTipoVehiculo = (req, res, next) => {
    TipoVehiculo.delete({_id: req.params.id}, (err, tipoVehiculo) => {
        if(err) res.json({error: err});
        res.json({message: 'Tipo de vehículo eliminado correctamente'});
    });
}