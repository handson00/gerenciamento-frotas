// routes/manutencaoRoutes.js

const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');

// Rota para listar manutenções
router.get('/', manutencaoController.listarManutencao);

// Rota para cadastrar manutenção
router.post('/', manutencaoController.cadastrarManutencao);

module.exports = router;
