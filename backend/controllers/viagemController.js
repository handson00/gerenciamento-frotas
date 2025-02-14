// controllers/viagemController.js

const db = require('../config/db');

// Função para listar viagens
exports.listarViagens = (req, res) => {
    db.query('SELECT * FROM viagens', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar viagens');
        }
        res.render('viagem', { viagens: results });
    });
};

// Função para criar uma viagem
exports.cadastrarViagem = (req, res) => {
    const { origem, destino, data } = req.body;
    db.query('INSERT INTO viagens (origem, destino, data) VALUES (?, ?, ?)', [origem, destino, data], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao cadastrar viagem');
        }
        res.redirect('/viagens');
    });
};

// Função para excluir uma viagem
exports.excluirViagem = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM viagens WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao excluir viagem');
        }
        res.redirect('/viagens');
    });
};