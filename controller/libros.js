const { Libro, Prestamo, LibroPrestamo } = require('../models/index');

// Crear un nuevo libro
const crearLibro = async (request, response) => {
    const {
        nomlibro,
        codlibro,
        genero,
        url,
        autor,
        activo
    } = request.body;

    const nuevoLibro = await Libro.create({
        codlibro,
        nomlibro,
        genero,
        url,
        autor,
        activo
    })

    if (nuevoLibro) {
        response.status(201).json({
            message: 'Libro creado exitosamente',
            libro: nuevoLibro
        })
    } else {
        response.status(400).json({
            message: 'Error al crear el libro'
        })
    }
}

// Editar Libro
const editarLibro = async (request, response) => {
    const {
        codlibro,
        nomlibro,
        genero,
        url,
        autor,
        activo
    } = request.body;

    const libro = await Libro.findByPk(codlibro);

    if (libro) {
        libro.nomlibro = nomlibro;
        libro.genero = genero;
        libro.url = url;
        libro.autor = autor;
        libro.activo = activo;
        await libro.save();
        response.status(200).json({
            message: 'Libro actualizado exitosamente',
            libro
        })
    } else {
        response.status(404).json({
            message: 'Libro no encontrado'
        })
    }
}

// Eliminar Libro
const eliminarLibro = async (request, response) => {
    const { codlibro } = request.params;
    const libro = await Libro.findByPk(codlibro);

    if (libro) {
        libro.activo = 'NO';
        await libro.save();
        response.status(200).json({
            message: 'Libro eliminado exitosamente'
        })
    } else {
        response.status(404).json({
            message: 'Libro no encontrado'
        })
    }
}




module.exports = {
    crearLibro,
    editarLibro,
    eliminarLibro
}


