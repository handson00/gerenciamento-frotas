const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario'); // Certifique-se de ter o modelo de usuário

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha'
}, async (email, senha, done) => {
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
}));

passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const usuario = await Usuario.findByPk(id);
        done(null, usuario);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;