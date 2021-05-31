const Evento = require('./evento.dao');

exports.createEvento = (req, res, next) => {
    const evento = {
        tituloEvento: req.body.titulo,
        descripcionEvento: req.body.descripcion
    };
    Evento.create(evento, (err, evento) => {
        if(err) res.json({error: err});
        res.json({message: 'Evento creado correctamente'});
    });
}
exports.getEventos = (req, res, next) => {
    Evento.get({}, (err, eventos) => {
        if(err) res.json({error: err});
        res.json({Eventos: eventos});
    });
}
exports.getEvento = (req, res, next) => {
    Evento.get({tituloEvento: req.params.titulo}, (err, evento) => {
        if(err) res.json({error: err});
        res.json({Evento: evento});
    });
}
exports.updateEvento = (req, res, next) => {
    const evento = {
        tituloEvento: req.body.titulo,
        descripcionEvento: req.body.descripcion
    };
    Evento.update({_id: req.params.id}, evento, (err, evento) => {
        if(err) res.json({error: err});
        res.json({message: 'Evento actualizado correctamente'});
    });
}
exports.removeEvento = (req, res, next) => {
    Evento.delete({_id: req.params.id}, (err, evento) => {
        if(err) res.json({error: err});
        res.json({message: 'Evento eliminado correctamente'});
    });
}