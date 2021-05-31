const Notificacion = require('./notificacion.dao');

exports.createNotificacion = (req, res, next) => {
    const notificacion = {
        tituloNotificacion: req.body.titulo,
        descripcionNotificacion: req.body.descripcion
    };
    Notificacion.create(notificacion, (err, notificacion) => {
        if(err) res.json({error: err});
        res.json({message: 'Notificación creada correctamente'});
    });
}
exports.getNotificaciones = (req, res, next) => {
    Notificacion.get({}, (err, notificaciones) => {
        if(err) res.json({error: err});
        res.json({Notificaciones: notificaciones});
    });
}
exports.getNotificacion = (req, res, next) => {
    Notificacion.get({tituloNotificacion: req.params.titulo}, (err, notificacion) =>{
        if(err) res.json({error: err});
        res.json({Notificación: notificacion});
    });
}
exports.updateNotificacion = (req, res, next) => {
    const notificacion = {
        tituloNotificacion: req.body.titulo,
        descripcionNotificacion: req.body.descripcion
    };
    Notificacion.update({_id: req.params.id}, notificacion, (err, notificacion) => {
        if(err) res.json({error: err});
        res.json({message: 'Notificación actualizada correctamente'});
    });
}
exports.removeNotificacion = (req, res, next) => {
    Notificacion.delete({_id: req.params.id}, (err, notificacion) => {
        if(err) res.json({error: err});
        res.json({message: 'Notificación eliminada correctamente'});
    });
}
