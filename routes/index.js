//Importamos express para el manejo de servidores
const express = require('express');
//Obtenemos el Router de express para manejar las rutas
const routes = express.Router();
//Importamos el controlador de Empleado
const empleadoController = require('../controllers/empleadoControllers');
//Importamos el controlador de Empleado
const administrativoController = require('../controllers/administrativoControllers');

//Método que manejara las rutas del servidor
module.exports = () => {

    //Agrega un empleado via POST
    routes.post('/empleados', empleadoController.agregarEmpleado);

    //Obtiene todos los empleados via GET
    routes.get('/empleados', empleadoController.obtenerEmpleados);

    //Obtiene un empleado via GET
    routes.get('/empleados/:id', empleadoController.obtenerEmpleado);

    //Actualiza un empleado via PUT
    routes.put('/empleados/:id', empleadoController.actualizarEmpleado);

    //Borra un empleado via PUT
    routes.delete('/empleados/:id', empleadoController.eliminarEmpleado);

    //Agrega un administrativo via POST
    routes.post('/administrativos', administrativoController.agregarAdministrativo);

    //Obtiene todos los administrativo via GET
    routes.get('/administrativos', administrativoController.obtenerAdministrativos);

    //Obtiene un administrativo via GET
    routes.get('/administrativos/:id', administrativoController.obtenerAdministrativo);

    //Actualiza un administrativo via PUT
    routes.put('/administrativos/:id', administrativoController.actualizarAdministrativo);

    //Borra un administrativo via PUT
    routes.delete('/administrativos/:id', administrativoController.eliminarAdministrativo);

    return routes;
}