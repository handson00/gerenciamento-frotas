const Veiculo = require('../models/veiculo');

// Função para listar veículos
exports.listarVeiculos = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.render('veiculos', { veiculos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar veículos');
    }
};

// Função para criar um veículo
exports.cadastrarVeiculo = async (req, res) => {
    const { modelo, placa, status } = req.body;
    try {
        await Veiculo.create({ modelo, placa, status });
        res.redirect('/veiculos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar veículo');
    }
};

// Função para editar um veículo
exports.editarVeiculo = async (req, res) => {
    const veiculoId = req.params.id;
    const { modelo, placa, status } = req.body;
    try {
        await Veiculo.update({ modelo, placa, status }, {
            where: { id: veiculoId }
        });
        res.redirect('/veiculos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao editar veículo');
    }
};

// Função para excluir um veículo
exports.excluirVeiculo = async (req, res) => {
    const veiculoId = req.params.id;
    try {
        await Veiculo.destroy({ where: { id: veiculoId } });
        res.redirect('/veiculos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir veículo');
    }
};