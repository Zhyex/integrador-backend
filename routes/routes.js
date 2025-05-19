const express = require('express')
const router = express.Router()
const pool = require('../config/db.js')
const { router } = require('../app')

router.post('/register',registerUser)

let registerUser = async (request, response)=>{
    const {
        nomusuario,
        dirusuario,
        email,
        celular,
        // tipousuario,
        activo,
        password
    } = request.body
    await pool.query('INSERT INTO usuario (email, password) VALUES (?, ?)', [email, password]);
    response.status(201).json({ message: 'Usuario creado' });
}

module.exports = router