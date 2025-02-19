const { Sequelize } = require('sequelize');

// Criação da conexão com o banco de dados
const sequelize = new Sequelize('gerenciamento_frotas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Teste de conexão
sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar com o banco de dados:', err);
    });

module.exports = sequelize;