const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // tu pool convertido a instancia Sequelize


const Libro = sequelize.define('Libro', {
    codlibro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: {
                args: [1, 11], // Esto no se aplica a INTEGER, pero puedes usarlo para cadenas
                msg: "El código del libro debe tener hasta 11 dígitos."
            },
            isInt: {
                msg: "El código del libro debe ser un número entero."
            }
        }
    },
    nomlibro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'https://www.google.com'
    },
    activo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'SI'
    }
}, {
    tableName: 'libro',
    timestamps: false
});

const PrestamoLibro = sequelize.define('PrestamoLibro', {
    codprestamo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: {
                args: [1, 11],
                msg: "El código del préstamo debe tener hasta 11 dígitos."
            },
            isInt: {
                msg: "El código del préstamo debe ser un número entero."
            }
        }
    },
    codlibro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: {
                args: [1, 11],
                msg: "El código del préstamo debe tener hasta 11 dígitos."
            },
            isInt: {
                msg: "El código del préstamo debe ser un número entero."
            }
        }
    }
}, {
    tableName: 'libroprestamo',
    timestamps: false
})

module.exports = {
    Libro,
    PrestamoLibro
}
    ;