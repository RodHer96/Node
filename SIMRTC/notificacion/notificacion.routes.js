const Notificacion = require('./notificacion.controller');
module.exports = (router) => {
    router.post('/notificacion/add', Notificacion.createNotificacion);
    router.get('/notificaciones/', Notificacion.getNotificaciones);
    router.get('/notificacion/:titulo', Notificacion.getNotificacion);
    router.put('/notificacion/update/:id', Notificacion.updateNotificacion);
    router.delete('/notificacion/remove/:id', Notificacion.removeNotificacion);
} 