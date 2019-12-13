let Platos = require("../../models/Platos");

//devuelve una lista de todas las bicicletas

exports.plato_list = function(req, res) {

    Platos.allPlatos(function (err, platos) {
      if(err) {res.status(500).send(err.message);}
      res.status(200).send(platos);
    });
};




exports.plato_create = function (req, res) {
  Platos.add({
    platoID: req.body.platoID,
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    categoria: req.body.categoria,
    etiqueta: req.body.etiqueta,
    precio: req.body.precio,
    destacado: req.body.destacado,
    descripcion: req.body.descripcion,
    comentarios:  []

  }, function (err, platos) {
    if(err) {res.status(500).send(err.message);}
    res.status(201).send();
  });

};

exports.plato_delete = function (req, res) {
  Platos.removeById(req.body.id, function (err, platos) {
    if(err) {res.status(500).send(err.message);}
    res.status(204).send(platos);
  });
};

exports.plato_update = function (req, res) {
  Platos.updateById(req.params.id, {
    platoID: req.body.platoID,
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    categoria: req.body.categoria,
    etiqueta: req.body.etiqueta,
    precio: req.body.precio,
    destacado: req.body.destacado,
    descripcion: req.body.descripcion

  }, function (err, platos) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};

exports.plato_comentario = function (req, res) {
  Platos.updateById(req.body.id, {
    $push:
    {
      comentarios:
      [
          {
            calificacion: req.body.calificacion,
            comentario: req.body.comentario,
            autor: req.body.autor,
            fecha: req.body.fecha
          }
      ]
    }

  }, function (err, platos) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};

exports.plato_comentario_borrar = function (req, res) {
  Platos.updateById(req.body.idPlato, {
    $pull:
    {
      comentarios:  { _id:[req.body.commentarioId] }
    }

  }, function (err, platos) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};

exports.plato_comentario_actualizar = function (req, res) {
  Platos.findUpdate(
    {_id:req.params.idPlato, "comentarios._id":req.params.idComment },
  {
    $set:
    {
      "comentarios.$.calificacion":req.body.calificacion,
      "comentarios.$.comentario":req.body.comentario,
      "comentarios.$.autor":req.body.autor,
      "comentarios.$.fecha":req.body.fecha
    }

  }, function (err, platos) {
      if(err) {res.status(500).send(err.message);}
      res.status(204).send();
  });
};
