"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var empleadoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  ap_paterno: {
    type: String
  },
  salario: {
    type: Number
  }
});
module.exports = model('Empleado', empleadoSchema);