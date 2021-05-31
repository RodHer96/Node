const Alerta = require('./alerta.dao');

exports.createAlerta = (req, res, next) => {
    const alerta = {
        tituloAlerta: req.body.titulo,
        descripcionAlerta: req.body.descripcion
    };
    Alerta.create(alerta, (err, alerta) => {
        if(err) res.json({error: err});
        res.json({message: 'Alerta creada correctamente'});
    });
}
exports.getAlertas = (req, res, next) => {
    Alerta.get({}, (err, alertas) => {
        if(err) res.json({error: err});
        res.json({Alertas: alertas});
    });
}
exports.getAlerta = (req, res, next) => {
    Alerta.get({tituloAlerta: req.params.titulo}, (err, alerta) => {
        if(err) res.json({error: err});
        res.json({Alerta: alerta});
    });
}
exports.updateAlerta = (req, res, next) => {
    const alerta = {
        tituloAlerta: req.body.titulo,
        descripcionAlerta: req.body.descripcion
    };
    Alerta.update({_id: req.params.id}, alerta, (err, alerta) => {
        if(err) res.json({error: err});
        res.json({message: 'Alerta actualizada correctamente'});
    });
}
exports.removeAlerta = (req, res, next) => {
    Alerta.delete({_id: req.params.id}, (err, alerta) => {
        if(err) res.json({error: err});
        res.json({message: 'Alerta eliminada correctamente'});
    });
}