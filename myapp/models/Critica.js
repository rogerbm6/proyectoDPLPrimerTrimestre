let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Esquema de base de datos
let criticaSchema = new Schema({
  criticaID: Number,
  nombre: String,
  calificacion: Number,
  critica: String,
  fecha: Date
});

//Lista
criticaSchema.statics.allCritics = function (cb) {
  return this.find({}, cb);
};

//Agrega
criticaSchema.statics.add = function (critic, cb) {
  return this.create(critic, cb);
};

//Busca un
criticaSchema.statics.findById = function (id, cb) {
  return this.findOne({_id:id}, cb);
};

//Elimina un
criticaSchema.statics.removeById = function (id, cb) {
  return this.deleteOne({_id:id}, cb);
};

criticaSchema.statics.updateById = function (id, critic, cb) {
  return this.findByIdAndUpdate({_id:id}, critic, cb);
};

module.exports = mongoose.model("Critica", criticaSchema);
