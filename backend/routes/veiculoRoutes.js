const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');
const { ensureAuthenticated } = require('../middleware/auth');

// Exibir todos os veículos
router.get('/', ensureAuthenticated, veiculoController.listarVeiculos);

// Página de cadastro de veículo
router.get('/cadastrar', ensureAuthenticated, veiculoController.cadastrarVeiculo);

// Cadastrar novo veículo
router.post('/cadastrar', ensureAuthenticated, veiculoController.salvarVeiculo);

// Página de edição de veículo
router.get('/editar/:id', ensureAuthenticated, veiculoController.editarVeiculo);

// Editar veículo
router.post('/editar/:id', ensureAuthenticated, veiculoController.atualizarVeiculo);

// Excluir veículo
router.post('/excluir/:id', ensureAuthenticated, veiculoController.excluirVeiculo);

module.exports = router;