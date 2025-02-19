const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Rota para listar veículos
router.get('/', veiculoController.listarVeiculos);

// Rota para cadastrar veículo
router.post('/', veiculoController.cadastrarVeiculo);

// Rota para editar veículo
router.post('/editar/:id', veiculoController.editarVeiculo);

// Rota para excluir veículo
router.post('/excluir/:id', veiculoController.excluirVeiculo);

module.exports = router;