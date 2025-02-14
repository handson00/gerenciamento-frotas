// controllers/manutencaoController.js

const db = require('../config/db');

// Função para listar manutenções
exports.listarManutencao = (req, res) => {
    db.query('SELECT * FROM manutencao', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar manutenções');
        }
        res.render('manutencao', { manutencao: results });
    });
};

// Função para criar uma manutenção
exports.cadastrarManutencao = (req, res) => {
    const { descricao, data } = req.body;
    db.query('INSERT INTO manutencao (descricao, data) VALUES (?, ?)', [descricao, data], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao cadastrar manutenção');
        }
        res.redirect('/manutencao');
    });
};

// Função para excluir uma manutenção
exports.excluirManutencao = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM manutencao WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao excluir manutenção');
        }
        res.redirect('/manutencao');
    });
};