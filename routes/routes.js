const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controller/authentication.js')
const { crearLibro, editarLibro, eliminarLibro } = require('../controller/libros.js')
const { crearPrestamo, editarPrestamo, eliminarPrestamo } = require('../controller/prestamos.js')
router.post('/register', registerUser)
router.post('/login', loginUser)

// Libros
router.post('/libros', crearLibro)
router.put('/libros/:codlibro', editarLibro)
router.delete('/libros/:codlibro', eliminarLibro)

// Prestamos
router.post('/prestamos', crearPrestamo)
router.put('/prestamos/:codprestamo', editarPrestamo)
router.delete('/prestamos/:codprestamo', eliminarPrestamo)

module.exports = router