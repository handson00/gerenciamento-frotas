const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');
const { ensureAuthenticated } = require('../middleware/auth');

// Rota para listar veículos
router.get('/', ensureAuthenticated, veiculoController.listarVeiculos);

// Rota para cadastrar veículo
router.post('/', ensureAuthenticated, veiculoController.cadastrarVeiculo);

// Rota para editar veículo
router.post('/editar/:id', ensureAuthenticated, veiculoController.editarVeiculo);

// Rota para excluir veículo
router.post('/excluir/:id', ensureAuthenticated, veiculoController.excluirVeiculo);

module.exports = router;