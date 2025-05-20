const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomusuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    emailusuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    dirusuario: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    celular: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    tipousuario: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    activo: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'SI'
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

module.exports = Usuario;