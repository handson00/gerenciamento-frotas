const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');

// Rota para listar manutenções
router.get('/', manutencaoController.listarManutencoes);

// Rota para cadastrar manutenção
router.post('/', manutencaoController.cadastrarManutencao);

// Rota para editar manutenção
router.post('/editar/:id', manutencaoController.editarManutencao);

// Rota para excluir manutenção
router.post('/excluir/:id', manutencaoController.excluirManutencao);

module.exports = router;