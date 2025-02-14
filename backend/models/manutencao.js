// models/manutencao.js

const db = require('../database');

const Manutencao = {
  // Criar uma nova manutenção
  criar: async (descricao, data) => {
    const query = 'INSERT INTO manutencao (descricao, data) VALUES (?, ?)';
    const [result] = await db.execute(query, [descricao, data]);
    return result;
  },

  // Obter todas as manutenções
  todas: async () => {
    const query = 'SELECT * FROM manutencao';
    const [rows] = await db.execute(query);
    return rows;
  },

  // Atualizar uma manutenção
  atualizar: async (id, descricao, data) => {
    const query = 'UPDATE manutencao SET descricao = ?, data = ? WHERE id = ?';
    const [result] = await db.execute(query, [descricao, data, id]);
    return result;
  },

  // Excluir uma manutenção
  excluir: async (id) => {
    const query = 'DELETE FROM manutencao WHERE id = ?';
    const [result] = await db.execute(query, [id]);
    return result;
  },
};

module.exports = Manutencao;
