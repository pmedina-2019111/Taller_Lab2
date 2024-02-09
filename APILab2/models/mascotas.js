const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
    nombre:{
        type: String, 
        required: [true, 'El nombre es obligatorio']
    },
    especie:{
        type: String,
        required: [true, 'La especie es obligatoria']
    },
    raza:{
        type: String,
        required: [true, 'La raza es obligatoria']
    },
    edad:{
        type: Number,
        required: [true, 'La edad es obligatoria']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('mascota', MascotaSchema);