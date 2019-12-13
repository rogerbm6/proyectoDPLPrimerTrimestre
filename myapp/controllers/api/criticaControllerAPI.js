let Critica = require("../../models/Critica");

//devuelve una lista de todas

exports.critica_list = function(req, res) {

    Critica.allCritics(function (err, critica) {
      if(err) {res.status(500).send(err.message);}
      res.status(200).send(critica);
    });
};




exports.critica_create = function (req, res) {
  Critica.add({
    criticaID: req.body.criticaID,
    nombre: req.body.nombre,
    calificacion: req.body.calificacion,
    critica: req.body.critica,
    fecha: req.body.fecha
  }, function (err, critica) {
    if(err) {res.status(500).send(err.message);}
    res.status(201).send();
  });

};

exports.critica_delete = function (req, res) {
  Critica.removeById(req.body.id, function (err, critica) {
    if(err) {res.status(500).send(err.message);}
    res.status(204).send(critica);
  });
};

exports.critica_update = function (req, res) {
  Critica.updateById(req.params.id, {
    criticaID: req.body.criticaID,
    nombre: req.body.nombre,
    calificacion: req.body.calificacion,
    critica: req.body.critica,
    fecha: req.body.fecha
  }, function (err, critica) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};
