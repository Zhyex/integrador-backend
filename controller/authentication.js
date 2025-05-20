const Usuario = require('../models/usuarios');


const registerUser = async (request, response) => {
    const {
        nomusuario,
        emailusuario,
        password,
        dirusuario,
        celular,
        tipousuario,
        activo
    } = request.body;
    try {
        const nuevo = await Usuario.create({
            nomusuario,
            emailusuario,
            password,
            dirusuario,
            celular,
            tipousuario,
            activo
        });
        response.status(201).json({ message: 'Usuario creado', usuario: nuevo });
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
};


const loginUser = async (request, response) => {
    const {
        emailusuario,
        password
    } = request.body;

    try {
        const usuario = await Usuario.findOne({
            where: {
                emailusuario
            }
        })

        console.log(usuario);

        if (usuario && usuario.password === password) {
            response.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
        } else {
            response.status(401).json({ message: 'Credenciales incorrectas' });
        }

    } catch (err) {
        response.status(500).json({ error: err.message });
    }
}

module.exports = {
    registerUser,
    loginUser
}