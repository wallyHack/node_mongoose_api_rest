"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var clienteSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  ap_paterno: {
    type: String
  },
  sexo: {
    type: String
  },
  edad: {
    type: Number
  },
  domicilio: {
    calle: String,
    numero: Number,
    cp: Number
  }
});
module.exports = model('Cliente', clienteSchema);