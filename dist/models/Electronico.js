"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var electronicoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  marca: {
    type: String
  },
  precio: {
    type: Number
  }
});
module.exports = model('Electronico', electronicoSchema);