
const { Schema, model } = require('mongoose');
const { Double } = require('mongodb');

const electronicoSchema = new Schema({
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