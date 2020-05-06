//Importamos mongoose para manejar la base de datos de mongoDB
const mongoose = require('mongoose');
//Asignamos el Schema para el modelo de Empleado
const Schema = mongoose.Schema;

//Definimos el Schema para el modelo de Empleado
const administrativoSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    edad: {
        type: String,
        trim: true
    },
    cargo: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    }
});

//Exportamos el modelo de Empleado
module.exports = mongoose.model('Administrativo', administrativoSchema);