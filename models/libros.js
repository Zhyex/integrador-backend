const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Libro = sequelize.define('Libro', {
    codlibro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomlibro: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    autor: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    activo: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'SI'
    }
}, {
    tableName: 'libro',
    timestamps: false
});

module.exports = Libro;