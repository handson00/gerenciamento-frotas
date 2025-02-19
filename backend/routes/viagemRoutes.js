const express = require('express');
const router = express.Router();
const viagemController = require('../controllers/viagemController');
const { ensureAuthenticated } = require('../middleware/auth');

// Exibir todas as viagens
router.get('/', ensureAuthenticated, viagemController.listarViagens);

// Página de cadastro de viagem
router.get('/cadastrar', ensureAuthenticated, viagemController.cadastrarViagem);

// Cadastrar nova viagem
router.post('/cadastrar', ensureAuthenticated, viagemController.salvarViagem);

// Página de edição de viagem
router.get('/editar/:id', ensureAuthenticated, viagemController.editarViagem);

// Editar viagem
router.post('/editar/:id', ensureAuthenticated, viagemController.atualizarViagem);

// Excluir viagem
router.post('/excluir/:id', ensureAuthenticated, viagemController.excluirViagem);

module.exports = router;