const Dispositivo = require('./dispositivoMovil.controller');
module.exports = (router) => {
    router.post('/dispositivo/add', Dispositivo.createDispositivoMovil);
    router.get('/dispositivos', Dispositivo.getDispositivosMoviles);
    router.get('/dispositivo/:id', Dispositivo.getDispositivoMovil);
    router.put('/dispositivo/update/:id', Dispositivo.updateDispositivoMovil);
    router.delete('/dispositivo/remove/:id', Dispositivo.removeDispositivoMovil);
}