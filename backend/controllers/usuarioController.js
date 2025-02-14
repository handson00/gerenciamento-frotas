// controllers/usuarioController.js

const db = require('../config/db');

// Função para listar usuários
exports.listarUsuarios = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar usuários');
        }
        res.render('home', { usuarios: results });
    });
};

// Função para criar um usuário
exports.cadastrarUsuario = (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao cadastrar usuário');
        }
        res.redirect('/');
    });
};

// Função para excluir um usuário
exports.excluirUsuario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao excluir usuário');
        }
        res.redirect('/');
    });
};