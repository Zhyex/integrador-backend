const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // tu pool convertido a instancia Sequelize

const Usuario = sequelize.define('Usuario', {
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomusuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailusuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dirusuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipousuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'SI'
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

module.exports = Usuario;
