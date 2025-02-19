const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, senha, done) => {
            try {
                const usuario = await Usuario.findOne({ where: { email } });
                if (!usuario) {
                    return done(null, false, { message: 'Usuário não encontrado' });
                }

                const isMatch = await bcrypt.compare(senha, usuario.senha);
                if (!isMatch) {
                    return done(null, false, { message: 'Senha incorreta' });
                }

                return done(null, usuario);
            } catch (err) {
                return done(err);
            }
        })
    );

    passport.serializeUser((usuario, done) => {
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done) => {
        Usuario.findByPk(id)
            .then((usuario) => done(null, usuario))
            .catch((err) => done(err));
    });
};