const Persona = require('./persona.controller');
module.exports = (router) => {
    router.post('/persona/add', Persona.createPersona);
    router.get('/personas', Persona.getPersonas);
    router.get('/persona/:id', Persona.getPersona);
    router.put('/persona/update/:id', Persona.updatePersona);
    router.delete('/persona/remove/:id', Persona.removePersona);
}