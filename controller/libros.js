const { Libro } = require('../models/index');

// Crear un nuevo libro
const crearLibro = async (request, response) => {
  try {
    const { nomlibro, codlibro, genero, url, autor, activo } = request.body;

    const nuevoLibro = await Libro.create({
      codlibro,
      nomlibro,
      genero,
      url,
      autor,
      activo
    });

    response.status(201).json({
      message: 'Libro creado exitosamente',
      libro: nuevoLibro
    });
  } catch (error) {
    response.status(400).json({
      message: 'Error al crear el libro',
      error: error.message
    });
  }
};

// Editar un libro
const editarLibro = async (request, response) => {
  const { codlibro } = request.params;
  const { nomlibro, genero, url, autor, activo } = request.body;

  try {
    const libro = await Libro.findByPk(codlibro);
    if (!libro) {
      return response.status(404).json({ message: 'Libro no encontrado' });
    }

    libro.nomlibro = nomlibro;
    libro.genero = genero;
    libro.url = url;
    libro.autor = autor;
    libro.activo = activo;

    await libro.save();

    response.status(200).json({
      message: 'Libro actualizado exitosamente',
      libro
    });
  } catch (error) {
    response.status(500).json({
      message: 'Error al editar el libro',
      error: error.message
    });
  }
};

// Eliminar (desactivar) un libro
const eliminarLibro = async (request, response) => {
  const { codlibro } = request.params;

  try {
    const libro = await Libro.findByPk(codlibro);
    if (!libro) {
      return response.status(404).json({ message: 'Libro no encontrado' });
    }

    libro.activo = 'NO';
    await libro.save();

    response.status(200).json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    response.status(500).json({
      message: 'Error al eliminar el libro',
      error: error.message
    });
  }
};

// Obtener libro por nombre exacto
const obtenerLibroPorNombre = async (request, response) => {
  const { nomlibro } = request.params;

  try {
    const libro = await Libro.findOne({
      where: { nomlibro, activo: 'SI' }
    });

    if (!libro) {
      return response.status(404).json({ message: 'Libro no encontrado' });
    }

    response.status(200).json(libro);
  } catch (error) {
    response.status(500).json({
      message: 'Error al buscar el libro',
      error: error.message
    });
  }
};

// Obtener todos los libros (puedes filtrar por activo si lo deseas)
const obtenerTodosLosLibros = async (request, response) => {
  try {
    const libros = await Libro.findAll({
      // where: { activo: 'SI' }, // Descomenta si solo deseas activos
      order: [['nomlibro', 'ASC']]
    });

    response.status(200).json(libros);
  } catch (error) {
    response.status(500).json({
      message: 'Error al obtener los libros',
      error: error.message
    });
  }
};

// Reactivar libro
const activarLibro = async (request, response) => {
  const { codlibro } = request.params;

  try {
    const libro = await Libro.findByPk(codlibro);
    if (!libro) {
      return response.status(404).json({ message: 'Libro no encontrado' });
    }

    libro.activo = 'SI';
    await libro.save();

    response.status(200).json({ message: 'Libro reactivado exitosamente' });
  } catch (error) {
    response.status(500).json({
      message: 'Error al activar el libro',
      error: error.message
    });
  }
};

const obtenerLibroPorCodigo = async (req, res) => {
  const { codlibro } = req.params;
  try {
    const libro = await Libro.findByPk(codlibro);
    if (libro) {
      res.status(200).json(libro);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el libro', error: error.message });
  }
};

// Exportar funciones
module.exports = {
  crearLibro,
  editarLibro,
  eliminarLibro,
  obtenerLibroPorNombre,
  obtenerTodosLosLibros,
  activarLibro,
  obtenerLibroPorCodigo
};
