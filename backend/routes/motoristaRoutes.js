// routes/motoristaRoutes.js

const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');

// Rota para listar motoristas
router.get('/', motoristaController.listarMotoristas);

// Rota para cadastrar motorista
router.post('/', motoristaController.cadastrarMotorista);

module.exports = router;
