const express = require('express');
const router = express.Router();
const viagemController = require('../controllers/viagemController');

// Rota para listar viagens
router.get('/', viagemController.listarViagens);

// Rota para cadastrar viagem
router.post('/', viagemController.cadastrarViagem);

// Rota para editar viagem
router.post('/editar/:id', viagemController.editarViagem);

// Rota para excluir viagem
router.post('/excluir/:id', viagemController.excluirViagem);

module.exports = router;