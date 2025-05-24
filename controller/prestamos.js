const { Prestamo, LibroPrestamo, Libro } = require('../models/index');

// Crear nuevo prestamo
const crearPrestamo = async (request, response) => {
    const {
        idusuario,
        activo
    } = request.body;

    const fecha = new Date();

    const nuevoPrestamo = await Prestamo.create({

        fecha,
        idusuario,
        activo
    })

    if (nuevoPrestamo) {
        response.status(201).json({
            message: 'Prestamo creado exitosamente',
            prestamo: nuevoPrestamo
        })
    } else {
        response.status(400).json({
            message: 'Error al crear el prestamo'
        })
    }
}

// Editar Prestamo
const editarPrestamo = async (request, response) => {
    const {
        codprestamo,
        activo
    } = request.body;

    const prestamo = await Prestamo.findByPk(codprestamo);

    if (prestamo) {
        prestamo.activo = activo;
        await prestamo.save();
        response.status(200).json({
            message: 'Prestamo actualizado exitosamente',
            prestamo
        })
    } else {
        response.status(404).json({
            message: 'Prestamo no encontrado'
        })
    }
}

// Eliminar Prestamo
const eliminarPrestamo = async (request, response) => {
    const { codprestamo } = request.params;
    const prestamo = await Prestamo.findByPk(codprestamo);

    if (prestamo) {
        await prestamo.destroy();
        response.status(200).json({
            message: 'Prestamo eliminado exitosamente'
        })
    } else {
        response.status(404).json({
            message: 'Prestamo no encontrado'
        })
    }
}

// Asociar libro al prestamo
const asociarLibro = async (request, response) => {
    const {
        codprestamo,
        codlibro
    } = request.body;

    const libroPrestamo = await LibroPrestamo.create({
        codprestamo,
        codlibro
    })

    if (libroPrestamo) {
        response.status(201).json({
            message: 'Libro asociado al prestamo exitosamente',
            libroPrestamo
        })
    } else {
        response.status(400).json({
            message: 'Error al asociar el libro al prestamo'
        })
    }
}


module.exports = {
    crearPrestamo,
    editarPrestamo,
    eliminarPrestamo,
    asociarLibro
}
