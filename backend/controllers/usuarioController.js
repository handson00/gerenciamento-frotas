const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

// Função para listar usuários
exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.render('usuarios', { usuarios });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários');
    }
};

// Função para criar um usuário
exports.cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);

    try {
        await Usuario.create({ nome, email, senha: senhaHash });
        res.redirect('/usuarios');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
};

// Função para excluir um usuário
exports.excluirUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await Usuario.destroy({ where: { id } });
        res.redirect('/usuarios');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir usuário');
    }
};