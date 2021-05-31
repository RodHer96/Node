const Evento = require('./evento.controller');
module.exports = (router) => {
    router.post('/evento/add', Evento.createEvento);
    router.get('/eventos', Evento.getEventos);
    router.get('/evento/:titulo', Evento.getEvento);
    router.put('/evento/update/:id', Evento.updateEvento);
    router.delete('/evento/remove/:id', Evento.removeEvento);
}