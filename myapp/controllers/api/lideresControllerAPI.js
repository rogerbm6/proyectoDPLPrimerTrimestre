let Lideres = require("../../models/Lideres");

//devuelve una lista de todas

exports.lideres_list = function(req, res) {

    Lideres.alllideres(function (err, lider) {
      if(err) {res.status(500).send(err.message);}
      res.status(200).send(lider);
    });
};




exports.lideres_create = function (req, res) {
  Lideres.add({
    liderID: req.body.liderID,
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    puesto: req.body.puesto,
    abbr: req.body.abbr,
    destacado: req.body.destacado,
    descripcion: req.body.descripcion
  }, function (err, critica) {
    if(err) {res.status(500).send(err.message);}
    res.status(201).send();
  });

};

exports.lideres_delete = function (req, res) {
  Lideres.removeById(req.body.id, function (err, lider) {
    if(err) {res.status(500).send(err.message);}
    res.status(204).send(lider);
  });
};

exports.lideres_update = function (req, res) {
  Lideres.updateById(req.params.id,
    {
      liderID: req.body.liderID,
      nombre: req.body.nombre,
      imagen: req.body.imagen,
      puesto: req.body.puesto,
      abbr: req.body.abbr,
      destacado: req.body.destacado,
      descripcion: req.body.descripcion
    }, function (err, lider) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};
