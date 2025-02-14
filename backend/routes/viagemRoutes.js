// routes/viagemRoutes.js

const express = require('express');
const router = express.Router();
const viagemController = require('../controllers/viagemController');

// Rota para listar viagens
router.get('/', viagemController.listarViagens);

// Rota para cadastrar viagem
router.post('/', viagemController.cadastrarViagem);

module.exports = router;
