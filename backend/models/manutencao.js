const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Veiculo = require('./veiculo');

const Manutencao = sequelize.define('Manutencao', {
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    custo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'manutencoes',
    timestamps: false // Desativar timestamps
});

// Definindo as associações
Manutencao.belongsTo(Veiculo, { foreignKey: 'veiculo_id' });
Veiculo.hasMany(Manutencao, { foreignKey: 'veiculo_id' });

module.exports = Manutencao;