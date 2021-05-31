const Dispositivo = require('./dispositivoMovil.dao');

exports.createDispositivoMovil = (req, res, next) => {
    const dispositivo = {
        marca: req.body.marca,
        imei: req.body.imei
    };
    Dispositivo.create(dispositivo, (err, dispositivo) => {
        if(err) res.json({error: err});
        res.json({message: 'Dispositivo móvil creado correctamente'});
    });
}
exports.getDispositivosMoviles = (req, res, next) => {
    Dispositivo.get({}, (err, dispositivos) => {
        if(err) res.json({error: err});
        res.json({DispositivosMóviles: dispositivos});
    });
}
exports.getDispositivoMovil= (req, res, next) => {
    Dispositivo.get({_id: req.params.id}, (err, dispositivo) => {
        if(err) res.json({error: err});
        res.json({Dispositivo: dispositivo});
    });
}
exports.updateDispositivoMovil = (req, res, next) => {
    const dispositivo = {
        marca: req.body.marca,
        imei: req.body.imei
    };
    Dispositivo.update({_id: req.params.id}, dispositivo, (err, dispositivo) => {
        if(err) res.json({error: err});
        res.json({message: 'Dispositivo móvil actualizado correctamente'});
    });
}
exports.removeDispositivoMovil = (req, res, next) => {
    Dispositivo.delete({_id: req.params.id}, (err, dispositivo) => {
        if(err) res.json({error: err});
        res.json({message: 'Dispositivo móvil eliminado correctamente'});
    });
}