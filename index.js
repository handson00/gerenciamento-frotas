// index.js

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const usuarioRoutes = require('./backend/routes/usuarioRoutes');
const veiculoRoutes = require('./backend/routes/veiculoRoutes');
const motoristaRoutes = require('./backend/routes/motoristaRoutes');
const viagemRoutes = require('./backend/routes/viagemRoutes');
const manutencaoRoutes = require('./backend/routes/manutencaoRoutes');

const app = express();
const port = 8080;

// Configuração do Handlebars
app.engine(
    'handlebars',
    handlebars.engine({
        defaultLayout: 'main', // Nome do layout principal
        layoutsDir: path.join(__dirname, 'frontend/views/layouts'), // Diretório de layouts
    })
);
app.set('view engine', 'handlebars'); // Garante que as views estão na pasta correta

// Middleware para manipulação de dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Roteamento
app.use('/usuarios', usuarioRoutes);
app.use('/veiculos', veiculoRoutes);
app.use('/motoristas', motoristaRoutes);
app.use('/viagens', viagemRoutes);
app.use('/manutencao', manutencaoRoutes);

// Serve arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Página inicial
app.get('/', (req, res) => {
    res.render('home'); // Certifique-se de que views/home.handlebars existe
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
