// controllers/motoristaController.js

const db = require('../config/db');

// Função para listar motoristas
exports.listarMotoristas = (req, res) => {
    db.query('SELECT * FROM motoristas', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar motoristas');
        }
        res.render('motorista', { motoristas: results });
    });
};

// Função para criar um motorista
exports.cadastrarMotorista = (req, res) => {
    const { nome, categoria } = req.body;
    db.query('INSERT INTO motoristas (nome, categoria) VALUES (?, ?)', [nome, categoria], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao cadastrar motorista');
        }
        res.redirect('/motoristas');
    });
};

// Função para excluir um motorista
exports.excluirMotorista = (req, res) => {
    const motoristaId = req.params.id;
    db.query('DELETE FROM motoristas WHERE id = ?', [motoristaId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao excluir motorista');
        }
        res.redirect('/motoristas');
    });
};