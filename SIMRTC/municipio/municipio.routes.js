const Municipio = require('./municipio.controller');
module.exports = (router) => {
    router.post('/municipio/add', Municipio.createMunicipio);
    router.get('/municipios', Municipio.getMunicipios);
    router.get('/municipio/:id', Municipio.getMunicipio);
    router.put('/municipio/update/:id', Municipio.updateMunicipio);
    router.delete('/municipio/remove/:id', Municipio.removeMunicipio);
}