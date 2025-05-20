const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Prestamo = sequelize.define('Prestamo', {

}, { tableName: 'prestamo', timestamps: false })
