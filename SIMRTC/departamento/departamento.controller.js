const Departamento = require('./departamento.dao');

exports.createDepartamento = (req, res, next) => {
    const departamento = {
        nombreDepartamento: req.body.nombre
    };
    Departamento.create(departamento, (err, departamento) => {
        if(err) res.json({error: err});
        res.json({message: 'Departamento creado correctamente'});
    });
}