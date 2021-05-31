const Marca = require('./marca.dao');

exports.createMarca = (req, res, next) => {
    const marca = {
        nombreMarca: req.body.name,
    };
    Marca.create(marca, (err, marca) => {
        if(err) res.json({error: err});
        res.json({message: 'Marca creada correctamente'});
    });
}
exports.getMarcas = (req, res, next) => {
    Marca.get({}, (err, marcas) => {
        if(err) res.json({error: err});
        res.json({Marcas: marcas});
    });
}
exports.getMarca = (req, res, next) => {
    Marca.get({nombreMarca: req.params.name}, (err, marca) => {
        if(err) res.json({error: err});
        res.json({Marca: marca});
    });
}
exports.updateMarca = (req, res, next) => {
    const marca = {
        nombreMarca: req.body.name,
    };
    Marca.update({_id: req.params.id}, marca, (err, marca) => {
        if(err) res.json({error: err});
        res.json({message: 'Marca actualizada correctamente'});
    });
}
exports.removeMarca = (req, res, next) => {
    Marca.delete({_id: req.params.id}, (err, marca) => {
        if(err) res.json({error: err});
        res.json({message: 'Marca eliminada correctamente'});
    });
}