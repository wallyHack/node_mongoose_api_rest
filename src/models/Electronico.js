
const { Schema, model } = require('mongoose');

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