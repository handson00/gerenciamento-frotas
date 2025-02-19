const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para listar usuários
router.get('/', usuarioController.listarUsuarios);

// Rota para a página de cadastro de usuário
router.get('/cadastrar', (req, res) => {
    res.render('cadastrarUsuario');
});

// Rota para cadastrar um usuário
router.post('/cadastrar', usuarioController.cadastrarUsuario);

// Rota para excluir um usuário
router.post('/excluir/:id', usuarioController.excluirUsuario);

module.exports = router;