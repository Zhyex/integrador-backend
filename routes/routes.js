const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controller/authentication.js')
const { crearLibro, editarLibro, eliminarLibro } = require('../controller/libros.js')
router.post('/register', registerUser)
router.post('/login', loginUser)

// Libros
router.post('/libros', crearLibro)
router.put('/libros/:codlibro', editarLibro)
router.delete('/libros/:codlibro', eliminarLibro)

module.exports = router