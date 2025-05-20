const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Prestamo = sequelize.define('Prestamo', {
    codprestamo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idusuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    activo: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'SI'
    }
}, {
    tableName: 'prestamo',
    timestamps: false
});

module.exports = Prestamo;