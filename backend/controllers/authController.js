const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

// Função para autenticar um usuário
exports.login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await Usuario.findOne({ where: { email } });
        if (!user) {
            return res.status(401).send('Email ou senha incorretos');
        }

        const senhaValida = bcrypt.compareSync(senha, user.senha);
        if (!senhaValida) {
            return res.status(401).send('Email ou senha incorretos');
        }

        // Autenticação bem-sucedida
        req.session.userId = user.id;
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
    }
};