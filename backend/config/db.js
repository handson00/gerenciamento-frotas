// config/db.js

const mysql = require('mysql2');

// Criação da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Senha do MySQL
    database: 'gerenciamento_frotas'
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

module.exports = db;
