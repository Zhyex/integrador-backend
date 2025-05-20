// integrador-backend/models/index.js
const Usuario = require('./usuarios');
const Libro = require('./libros');
const Prestamo = require('./prestamo');
const LibroPrestamo = require('./libroprestamos');

// Definir relaciones
Usuario.hasMany(Prestamo, { foreignKey: 'idusuario' });
Prestamo.belongsTo(Usuario, { foreignKey: 'idusuario' });

Libro.belongsToMany(Prestamo, { through: LibroPrestamo, foreignKey: 'codlibro' });
Prestamo.belongsToMany(Libro, { through: LibroPrestamo, foreignKey: 'codprestamo' });

module.exports = {
    Usuario,
    Libro,
    Prestamo,
    LibroPrestamo
};