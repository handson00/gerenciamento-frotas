const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Veiculo = require('./veiculo');
const Motorista = require('./motorista');

const Viagem = sequelize.define('Viagem', {
    destino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_saida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_retorno: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM('Planejada', 'Em Andamento', 'Finalizada'),
        defaultValue: 'Planejada'
    }
}, {
    tableName: 'viagens'
});

// Definindo as associações
Viagem.belongsTo(Veiculo, { foreignKey: 'veiculo_id' });
Viagem.belongsTo(Motorista, { foreignKey: 'motorista_id' });

Veiculo.hasMany(Viagem, { foreignKey: 'veiculo_id' });
Motorista.hasMany(Viagem, { foreignKey: 'motorista_id' });

module.exports = Viagem;