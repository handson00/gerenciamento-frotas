const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');
const { ensureAuthenticated } = require('../middleware/auth');

// Exibir todas as manutenções
router.get('/', ensureAuthenticated, manutencaoController.listarManutencoes);

// Página de cadastro de manutenção
router.get('/cadastrar', ensureAuthenticated, manutencaoController.cadastrarManutencao);

// Cadastrar nova manutenção
router.post('/cadastrar', ensureAuthenticated, manutencaoController.salvarManutencao);

// Página de edição de manutenção
router.get('/editar/:id', ensureAuthenticated, manutencaoController.editarManutencao);

// Editar manutenção
router.post('/editar/:id', ensureAuthenticated, manutencaoController.atualizarManutencao);

// Excluir manutenção
router.post('/excluir/:id', ensureAuthenticated, manutencaoController.excluirManutencao);

module.exports = router;