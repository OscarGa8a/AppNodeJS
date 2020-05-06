//Importamos express para el manejo de servidores
const express = require('express');
//Importamos mongoose para manejar la base de datos de mongoDB
const mongoose = require('mongoose');
//Importamos el Router del servidor
const routes = require('./routes');
//Importamos body-parser
const bodyParser = require('body-parser');
//Importamos variables de entorno
require('dotenv').config({path: 'variables.env'});

//Creamos el servidor
const app = express();

//Habilitamos mongoose
mongoose.Promise = global.Promise;
//Nos contectamos con la base de datos mongoDB en la url
mongoose.connect('mongodb+srv://oscarga8a:IngElec123@dbcluster-nhvz2.mongodb.net/empresa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Configuramos el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitamos el routing
app.use('/', routes());

//Definimos host
const host = process.env.HOST || '0.0.0.0';
//Definimos puerto
const port = process.env.PORT || 4000;

//Asignamos puerto y arrancamos el servidor
app.listen(port, host, () => {
    console.log('Servidor iniciado');
});