// controllers/veiculoController.js

const db = require('../config/db');

// Função para listar veículos
exports.listarVeiculos = (req, res) => {
    db.query('SELECT * FROM veiculos', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar veículos');
        }
        res.render('veiculo', { veiculos: results });
    });
};

// Função para criar um veículo
exports.cadastrarVeiculo = (req, res) => {
    const { modelo, placa } = req.body;
    db.query('INSERT INTO veiculos (modelo, placa) VALUES (?, ?)', [modelo, placa], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao cadastrar veículo');
        }
        res.redirect('/veiculos');
    });
};

// Função para excluir um veículo
exports.excluirVeiculo = (req, res) => {
    const veiculoId = req.params.id;
    db.query('DELETE FROM veiculos WHERE id = ?', [veiculoId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao excluir veículo');
        }
        res.redirect('/veiculos');
    });
};