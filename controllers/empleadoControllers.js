//Importamos el modelo de Empleado
const Empleado = require('../models/Empleado');

//Permite agregar un empleado a la base de datos
exports.agregarEmpleado = async (req, res, next) => {
    const empleado = new Empleado(req.body);    
    try {
        await empleado.save();   
        res.json({mensaje: 'Empleado agregado correctamente!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}


//Permite obtener todos los empleados en la base de datos
exports.obtenerEmpleados = async (req, res, next) => {    
    try {
        const empleados = await Empleado.find({});   
        res.json(empleados);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite obtener un empleado especifico en la base de datos
exports.obtenerEmpleado = async (req, res, next) => {    
    try {
        const empleado = await Empleado.findById(req.params.id);   
        res.json(empleado);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite actualizar los datos de un empleado especifico en la base de datos
exports.actualizarEmpleado = async (req, res, next) => {    
    try {
        const empleado = await Empleado.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });   
        res.json(empleado);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite actualizar los datos de un empleado especifico en la base de datos
exports.eliminarEmpleado = async (req, res, next) => {    
    try {
        await Empleado.findOneAndDelete({_id: req.params.id});   
        res.json({mensaje: 'Empleado eliminado correctamente!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}