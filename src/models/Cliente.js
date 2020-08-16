
const {Schema, model} = require('mongoose');

const clienteSchema = new Schema({
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