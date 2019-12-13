let Promo = require("../../models/Promociones");

//devuelve una lista de todas las bicicletas

exports.promociones_list = function(req, res) {

    Promo.allPromos(function (err, promo) {
      if(err) {res.status(500).send(err.message);}
      res.status(200).send(promo);
    });
};




exports.promociones_create = function (req, res) {
  Promo.add({
    promoID: req.body.promoID,
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    etiqueta: req.body.etiqueta,
    precio: req.body.precio,
    destacado: req.body.destacado,
    descripcion: req.body.descripcion

  }, function (err, promo) {
    if(err) {res.status(500).send(err.message);}
    res.status(201).send();
  });

};

exports.promociones_delete = function (req, res) {
  Promo.removeById(req.body.id, function (err, promo) {
    if(err) {res.status(500).send(err.message);}
    res.status(204).send(promo);
  });
};

exports.promociones_update = function (req, res) {
  Promo.updateById(req.params.id, {
    promoID: req.body.promoID,
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    etiqueta: req.body.etiqueta,
    precio: req.body.precio,
    destacado: req.body.destacado,
    descripcion: req.body.descripcion

  }, function (err, promo) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};
