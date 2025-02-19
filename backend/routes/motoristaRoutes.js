const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');
const { ensureAuthenticated } = require('../middleware/auth');

// Exibir todos os motoristas
router.get('/', ensureAuthenticated, motoristaController.listarMotoristas);

// Página de cadastro de motorista
router.get('/cadastrar', ensureAuthenticated, motoristaController.cadastrarMotorista);

// Cadastrar novo motorista
router.post('/cadastrar', ensureAuthenticated, motoristaController.salvarMotorista);

// Página de edição de motorista
router.get('/editar/:id', ensureAuthenticated, motoristaController.editarMotorista);

// Editar motorista
router.post('/editar/:id', ensureAuthenticated, motoristaController.atualizarMotorista);

// Excluir motorista
router.post('/excluir/:id', ensureAuthenticated, motoristaController.excluirMotorista);

module.exports = router;