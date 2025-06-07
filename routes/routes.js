const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controller/authentication.js')
const { obtenerLibroPorCodigo, obtenerLibroPorNombre, obtenerTodosLosLibros, crearLibro, editarLibro, eliminarLibro, activarLibro } = require('../controller/libros.js')
const { crearPrestamo, editarPrestamo, eliminarPrestamo } = require('../controller/prestamos.js')
router.post('/register', registerUser)
router.post('/login', loginUser)

// Libros
// GET todos los libros
router.get('/libros', obtenerTodosLosLibros);

// GET libro por nombre
router.get('/libros/nombre/:nomlibro', obtenerLibroPorNombre);
router.post('/libros', crearLibro)
router.put('/libros/:codlibro', editarLibro)
router.delete('/libros/:codlibro', eliminarLibro)

// ✅ Nueva ruta para activar un libro
router.put('/libros/activar/:codlibro', activarLibro)

router.get('/libros/id/:codlibro', obtenerLibroPorCodigo);

// Prestamos
router.post('/prestamos', crearPrestamo)
router.put('/prestamos/:codprestamo', editarPrestamo)
router.delete('/prestamos/:codprestamo', eliminarPrestamo)

module.exports = router