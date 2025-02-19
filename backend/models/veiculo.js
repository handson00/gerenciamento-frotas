const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Veiculo = sequelize.define('Veiculo', {
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.ENUM('Em Andamento', 'Finalizado'),
        defaultValue: 'Em Andamento'
    }
}, {
    tableName: 'veiculos'
});

module.exports = Veiculo;