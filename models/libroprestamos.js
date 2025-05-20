const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LibroPrestamo = sequelize.define('LibroPrestamo', {
    codprestamo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    codlibro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'libroprestamo',
    timestamps: false
});

module.exports = LibroPrestamo;