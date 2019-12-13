let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Esquema de base de datos
let promoSchema = new Schema({
  promoID: Number,
  nombre: String,
  imagen: String,
  etiqueta: String,
  precio: String,
  destacado: Boolean,
  descripcion: String
});

//Lista
promoSchema.statics.allPromos = function (cb) {
  return this.find({}, cb);
};

//Agrega
promoSchema.statics.add = function (promo, cb) {
  return this.create(promo, cb);
};

//Busca un
promoSchema.statics.findById = function (id, cb) {
  return this.findOne({_id:id}, cb);
};

//Elimina un
promoSchema.statics.removeById = function (id, cb) {
  return this.deleteOne({_id:id}, cb);
};

promoSchema.statics.updateById = function (id, promo, cb) {
  return this.findByIdAndUpdate({_id:id}, promo, cb);
};

module.exports = mongoose.model("Promociones", promoSchema);
