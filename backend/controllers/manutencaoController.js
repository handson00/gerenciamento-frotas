const Manutencao = require('../models/manutencao');
const Veiculo = require('../models/veiculo');

// Função para listar manutenções
exports.listarManutencoes = async (req, res) => {
    try {
        const manutencoes = await Manutencao.findAll({
            include: [
                { model: Veiculo }
            ]
        });

        const veiculos = await Veiculo.findAll();

        res.render('manutencoes', { manutencoes, veiculos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar manutenções');
    }
};

// Função para criar uma manutenção
exports.cadastrarManutencao = async (req, res) => {
    const { descricao, data, custo, veiculo_id } = req.body;
    try {
        await Manutencao.create({ descricao, data, custo, veiculo_id });
        res.redirect('/manutencoes');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar manutenção');
    }
};

// Função para editar uma manutenção
exports.editarManutencao = async (req, res) => {
    const manutencaoId = req.params.id;
    const { descricao, data, custo, veiculo_id } = req.body;
    try {
        await Manutencao.update({ descricao, data, custo, veiculo_id }, {
            where: { id: manutencaoId }
        });
        res.redirect('/manutencoes');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao editar manutenção');
    }
};

// Função para excluir uma manutenção
exports.excluirManutencao = async (req, res) => {
    const manutencaoId = req.params.id;
    try {
        await Manutencao.destroy({ where: { id: manutencaoId } });
        res.redirect('/manutencoes');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir manutenção');
    }
};