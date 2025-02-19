const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para a página de login
router.get('/login', (req, res) => {
    res.render('login');
});

// Rota para autenticar o usuário
router.post('/login', authController.login);

module.exports = router;