const Alerta = require('./alerta.controller');
module.exports = (router) => {
    router.post('/alerta/add', Alerta.createAlerta);
    router.get('/alertas', Alerta.getAlertas);
    router.get('/alerta/:titulo', Alerta.getAlerta);
    router.put('/alerta/update/:id', Alerta.updateAlerta);
    router.delete('/alerta/remove/:id', Alerta.removeAlerta);
}