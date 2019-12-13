let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Esquema de base de datos
let platoSchema = new Schema({
  platoID: Number,
  nombre: String,
  imagen: String,
  categoria: String,
  etiqueta: String,
  precio: Number,
  destacado: Boolean,
  descripcion: String,
  comentarios: {
    type: [
      {
        calificacion: Number,
        comentario: String,
        autor: String,
        fecha: Date
      }
    ],
    index: true
  }
});

//Lista
platoSchema.statics.allPlatos = function (cb) {
  return this.find({}, cb);
};

//Agrega
platoSchema.statics.add = function (plato, cb) {
  return this.create(plato, cb);
};

//Busca un
platoSchema.statics.findById = function (id, cb) {
  return this.findOne({_id:id}, cb);
};

//Elimina un
platoSchema.statics.removeById = function (id, cb) {
  return this.deleteOne({_id:id}, cb);
};

platoSchema.statics.updateById = function (id, plato, cb) {
  return this.findByIdAndUpdate({_id:id}, plato, cb);
};

platoSchema.statics.findUpdate = function (id, plato, cb) {
  return this.findOneAndUpdate(id, plato, cb);
};


module.exports = mongoose.model("Platos", platoSchema);
