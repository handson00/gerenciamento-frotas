// models/motorista.js

const db = require('../database');

const Motorista = {
  // Criar um novo motorista
  criar: async (nome, categoria) => {
    const query = 'INSERT INTO motoristas (nome, categoria) VALUES (?, ?)';
    const [result] = await db.execute(query, [nome, categoria]);
    return result;
  },

  // Obter todos os motoristas
  todos: async () => {
    const query = 'SELECT * FROM motoristas';
    const [rows] = await db.execute(query);
    return rows;
  },

  // Atualizar um motorista
  atualizar: async (id, nome, categoria) => {
    const query = 'UPDATE motoristas SET nome = ?, categoria = ? WHERE id = ?';
    const [result] = await db.execute(query, [nome, categoria, id]);
    return result;
  },

  // Excluir um motorista
  excluir: async (id) => {
    const query = 'DELETE FROM motoristas WHERE id = ?';
    const [result] = await db.execute(query, [id]);
    return result;
  },
};

module.exports = Motorista;
