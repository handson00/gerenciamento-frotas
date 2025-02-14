// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para listar usuários
router.get('/', usuarioController.listarUsuarios);

// Rota para cadastrar usuário
router.post('/', usuarioController.cadastrarUsuario);

module.exports = router;
