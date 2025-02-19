const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('dotenv').config(); // Carregar variáveis de ambiente
require('./backend/config/passport')(passport); // Configuração do Passport

const usuarioRoutes = require('./backend/routes/usuarioRoutes');
const veiculoRoutes = require('./backend/routes/veiculoRoutes');
const motoristaRoutes = require('./backend/routes/motoristaRoutes');
const viagemRoutes = require('./backend/routes/viagemRoutes');
const manutencaoRoutes = require('./backend/routes/manutencaoRoutes');
const authRoutes = require('./backend/routes/authRoutes');

const app = express();
const port = 8080;

// Configuração do Handlebars
const hbs = handlebars.create({
    defaultLayout: 'main', // Nome do layout principal
    layoutsDir: path.join(__dirname, 'frontend/views/layouts'), // Diretório de layouts
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        eq: function (a, b) {
            return a === b;
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); // Garante que as views estão na pasta correta
app.set('views', path.join(__dirname, 'frontend/views')); // Define o diretório de views

// Middleware para manipulação de dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração da sessão
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Inicializar o Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Conectar flash para mensagens flash
app.use(flash());

// Middleware para mensagens flash
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Roteamento
app.use('/usuarios', usuarioRoutes);
app.use('/veiculos', veiculoRoutes);
app.use('/motoristas', motoristaRoutes);
app.use('/viagens', viagemRoutes);
app.use('/manutencoes', manutencaoRoutes);
app.use('/', authRoutes);

// Serve arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Página inicial
app.get('/', (req, res) => {
    res.render('home');
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});