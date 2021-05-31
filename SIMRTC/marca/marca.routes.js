const Marca = require('./marca.controller');
module.exports = (router) => {
    router.post('/marca/add', Marca.createMarca);
    router.get('/marcas', Marca.getMarcas);
    router.get('/marca/:name', Marca.getMarca);
    router.put('/marca/update/:id', Marca.updateMarca);
    router.delete('/marca/remove/:id', Marca.removeMarca);
}