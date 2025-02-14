// models/veiculo.js

const db = require('../database');

const Veiculo = {
  // Criar um novo veículo
  criar: async (modelo, placa) => {
    const query = 'INSERT INTO veiculos (modelo, placa) VALUES (?, ?)';
    const [result] = await db.execute(query, [modelo, placa]);
    return result;
  },

  // Obter todos os veículos
  todos: async () => {
    const query = 'SELECT * FROM veiculos';
    const [rows] = await db.execute(query);
    return rows;
  },

  // Atualizar um veículo
  atualizar: async (id, modelo, placa) => {
    const query = 'UPDATE veiculos SET modelo = ?, placa = ? WHERE id = ?';
    const [result] = await db.execute(query, [modelo, placa, id]);
    return result;
  },

  // Excluir um veículo
  excluir: async (id) => {
    const query = 'DELETE FROM veiculos WHERE id = ?';
    const [result] = await db.execute(query, [id]);
    return result;
  },
};

module.exports = Veiculo;
