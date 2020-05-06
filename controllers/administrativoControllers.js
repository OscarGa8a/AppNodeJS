//Importamos el modelo de Empleado
const Administrativo = require('../models/Administrativo');

//Permite agregar un empleado a la base de datos
exports.agregarAdministrativo = async (req, res, next) => {
    const administrativo = new Administrativo(req.body);    
    try {
        await administrativo.save();   
        res.json({mensaje: 'Admisnitrativo agregado correctamente!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite obtener todos los empleados en la base de datos
exports.obtenerAdministrativos = async (req, res, next) => {    
    try {
        const administrativos = await Administrativo.find({});   
        res.json(administrativos);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite obtener un empleado especifico en la base de datos
exports.obtenerAdministrativo = async (req, res, next) => {    
    try {
        const administrativo = await Administrativo.findById(req.params.id);   
        res.json(administrativo);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite actualizar los datos de un empleado especifico en la base de datos
exports.actualizarAdministrativo = async (req, res, next) => {    
    try {
        const administrativo = await Administrativo.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });   
        res.json(administrativo);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite actualizar los datos de un empleado especifico en la base de datos
exports.eliminarAdministrativo = async (req, res, next) => {    
    try {
        await Administrativo.findOneAndDelete({_id: req.params.id});   
        res.json({mensaje: 'Administrativo eliminado correctamente!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}
