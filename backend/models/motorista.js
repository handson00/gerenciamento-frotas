const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Motorista = sequelize.define('Motorista', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnh: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    validade_cnh: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'motoristas'
});

module.exports = Motorista;