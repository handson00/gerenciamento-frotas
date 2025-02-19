const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');

// Rota para listar motoristas
router.get('/', motoristaController.listarMotoristas);

// Rota para cadastrar motorista
router.post('/', motoristaController.cadastrarMotorista);

// Rota para editar motorista
router.post('/editar/:id', motoristaController.editarMotorista);

// Rota para excluir motorista
router.post('/excluir/:id', motoristaController.excluirMotorista);

module.exports = router;