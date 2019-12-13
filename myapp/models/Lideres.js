let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Esquema de base de datos
let lideresSchema = new Schema({
  liderID: Number,
  nombre: String,
  imagen: String,
  puesto: String,
  abbr: String,
  destacado: Boolean,
  descripcion: String
});

//Lista
lideresSchema.statics.alllideres = function (cb) {
  return this.find({}, cb);
};

//Agrega
lideresSchema.statics.add = function (lider, cb) {
  return this.create(lider, cb);
};

//Busca un
lideresSchema.statics.findById = function (id, cb) {
  return this.findOne({_id:id}, cb);
};

//Elimina un
lideresSchema.statics.removeById = function (id, cb) {
  return this.deleteOne({_id:id}, cb);
};

lideresSchema.statics.updateById = function (id, lider, cb) {
  return this.findByIdAndUpdate({_id:id}, lider, cb);
};

module.exports = mongoose.model("Lideres", lideresSchema);
