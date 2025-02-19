const Usuario = require('../models/usuario');

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.render('usuarios', { usuarios });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar usuários');
        res.redirect('/');
    }
};

exports.cadastrarUsuario = (req, res) => {
    res.render('cadastrarUsuario');
};

exports.salvarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        await Usuario.create({ nome, email, senha });
        req.flash('success_msg', 'Usuário cadastrado com sucesso');
        res.redirect('/usuarios');
    } catch (err) {
        console.error(err);
        req.flash('error_msg', 'Erro ao cadastrar usuário');
        res.redirect('/usuarios/cadastrar');
    }
};

exports.editarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            req.flash('error_msg', 'Usuário não encontrado');
            return res.redirect('/usuarios');
        }
        res.render('editarUsuario', { usuario });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar usuário');
        res.redirect('/usuarios');
    }
};

exports.atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        await Usuario.update({ nome, email, senha }, { where: { id: req.params.id } });
        req.flash('success_msg', 'Usuário atualizado com sucesso');
        res.redirect('/usuarios');
    } catch (err) {
        req.flash('error_msg', 'Erro ao atualizar usuário');
        res.redirect('/usuarios/editar/' + req.params.id);
    }
};

exports.excluirUsuario = async (req, res) => {
    try {
        await Usuario.destroy({ where: { id: req.params.id } });
        req.flash('success_msg', 'Usuário excluído com sucesso');
        res.redirect('/usuarios');
    } catch (err) {
        req.flash('error_msg', 'Erro ao excluir usuário');
        res.redirect('/usuarios');
    }
};