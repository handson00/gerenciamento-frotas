const express = require('express');
const router = express.Router();
const passport = require('passport');

// Rota de login
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true // Habilita flash messages para falha na autenticação
    })(req, res, next);
});

// Rota de logout
router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', 'Você saiu');
        res.redirect('/login');
    });
});

module.exports = router;