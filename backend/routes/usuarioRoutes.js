const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { ensureAuthenticated } = require('../middleware/auth');

// Exibir todos os usuários
router.get('/', ensureAuthenticated, usuarioController.listarUsuarios);

// Página de cadastro de usuário
router.get('/cadastrar', usuarioController.cadastrarUsuario);

// Cadastrar novo usuário
router.post('/cadastrar', usuarioController.salvarUsuario);

// Página de edição de usuário
router.get('/editar/:id', ensureAuthenticated, usuarioController.editarUsuario);

// Editar usuário
router.post('/editar/:id', ensureAuthenticated, usuarioController.atualizarUsuario);

// Excluir usuário
router.post('/excluir/:id', ensureAuthenticated, usuarioController.excluirUsuario);

module.exports = router;