
const { Schema, model} = require('mongoose');

const empleadoSchema = new Schema({
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