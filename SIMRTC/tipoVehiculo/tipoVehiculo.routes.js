const TipoVehiculo = require('./tipoVehiculo.controller');
module.exports = (router) => {
    router.post('/tipovehiculo/add', TipoVehiculo.createTipoVehiculo);
    router.get('/tipovehiculos', TipoVehiculo.getTipoVehiculos);
    router.get('/tipovehiculo/:name', TipoVehiculo.getTipoVehiculo);
    router.put('/tipovehiculo/update/:id', TipoVehiculo.updateTipoVehiculo);
    router.delete('/tipovehiculo/remove/:id', TipoVehiculo.removeTipoVehiculo);
}