// models/usuario.js

const db = require('../database');

const Usuario = {
  // Criar um novo usuário
  criar: async (nome, email, senha) => {
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    const [result] = await db.execute(query, [nome, email, senha]);
    return result;
  },

  // Encontrar um usuário pelo email
  encontrarPorEmail: async (email) => {
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    const [rows] = await db.execute(query, [email]);
    return rows[0];
  },

  // Obter todos os usuários
  todos: async () => {
    const query = 'SELECT * FROM usuarios';
    const [rows] = await db.execute(query);
    return rows;
  },
};

module.exports = Usuario;
