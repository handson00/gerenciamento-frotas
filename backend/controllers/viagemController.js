const Viagem = require('../models/viagem');
const Veiculo = require('../models/veiculo');
const Motorista = require('../models/motorista');

// Função para listar viagens
exports.listarViagens = async (req, res) => {
    try {
        const viagens = await Viagem.findAll({
            include: [
                { model: Veiculo },
                { model: Motorista }
            ]
        });

        const veiculos = await Veiculo.findAll();
        const motoristas = await Motorista.findAll();

        res.render('viagens', { viagens, veiculos, motoristas });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar viagens');
    }
};

// Função para criar uma viagem
exports.cadastrarViagem = async (req, res) => {
    const { destino, data_saida, data_retorno, veiculo_id, motorista_id, status } = req.body;
    try {
        await Viagem.create({ destino, data_saida, data_retorno, veiculo_id, motorista_id, status });
        res.redirect('/viagens');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar viagem');
    }
};

// Função para editar uma viagem
exports.editarViagem = async (req, res) => {
    const viagemId = req.params.id;
    const { destino, data_saida, data_retorno, veiculo_id, motorista_id, status } = req.body;
    try {
        await Viagem.update({ destino, data_saida, data_retorno, veiculo_id, motorista_id, status }, {
            where: { id: viagemId }
        });
        res.redirect('/viagens');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao editar viagem');
    }
};

// Função para excluir uma viagem
exports.excluirViagem = async (req, res) => {
    const viagemId = req.params.id;
    try {
        await Viagem.destroy({ where: { id: viagemId } });
        res.redirect('/viagens');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir viagem');
    }
};