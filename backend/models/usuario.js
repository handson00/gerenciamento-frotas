const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Definição do modelo Usuario
const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false // Desativar timestamps se não precisar de createdAt e updatedAt
});

module.exports = Usuario;