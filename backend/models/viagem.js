// models/viagem.js

const db = require('../database');

const Viagem = {
  // Criar uma nova viagem
  criar: async (origem, destino, data, id_motorista, id_veiculo) => {
    const query = 'INSERT INTO viagens (origem, destino, data, id_motorista, id_veiculo) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.execute(query, [origem, destino, data, id_motorista, id_veiculo]);
    return result;
  },

  // Obter todas as viagens
  todas: async () => {
    const query = 'SELECT * FROM viagens';
    const [rows] = await db.execute(query);
    return rows;
  },

  // Atualizar uma viagem
  atualizar: async (id, origem, destino, data, id_motorista, id_veiculo) => {
    const query = 'UPDATE viagens SET origem = ?, destino = ?, data = ?, id_motorista = ?, id_veiculo = ? WHERE id = ?';
    const [result] = await db.execute(query, [origem, destino, data, id_motorista, id_veiculo, id]);
    return result;
  },

  // Excluir uma viagem
  excluir: async (id) => {
    const query = 'DELETE FROM viagens WHERE id = ?';
    const [result] = await db.execute(query, [id]);
    return result;
  },
};

module.exports = Viagem;
