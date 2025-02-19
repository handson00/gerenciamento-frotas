const Manutencao = require('../models/manutencao');
const Veiculo = require('../models/veiculo');

exports.listarManutencoes = async (req, res) => {
    try {
        const manutencoes = await Manutencao.findAll({
            include: [Veiculo]
        });
        res.render('manutencoes', { manutencoes });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar manutenções');
        res.redirect('/');
    }
};

exports.cadastrarManutencao = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.render('cadastrarManutencao', { veiculos });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar dados para cadastro');
        res.redirect('/manutencoes');
    }
};

exports.salvarManutencao = async (req, res) => {
    const { descricao, data, custo, veiculo_id } = req.body;
    try {
        await Manutencao.create({ descricao, data, custo, veiculo_id });
        req.flash('success_msg', 'Manutenção cadastrada com sucesso');
        res.redirect('/manutencoes');
    } catch (err) {
        req.flash('error_msg', 'Erro ao cadastrar manutenção');
        res.redirect('/manutencoes/cadastrar');
    }
};

exports.editarManutencao = async (req, res) => {
    try {
        const manutencao = await Manutencao.findByPk(req.params.id);
        const veiculos = await Veiculo.findAll();
        if (!manutencao) {
            req.flash('error_msg', 'Manutenção não encontrada');
            return res.redirect('/manutencoes');
        }
        res.render('editarManutencao', { manutencao, veiculos });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar manutenção');
        res.redirect('/manutencoes');
    }
};

exports.atualizarManutencao = async (req, res) => {
    const { descricao, data, custo, veiculo_id } = req.body;
    try {
        await Manutencao.update({ descricao, data, custo, veiculo_id }, { where: { id: req.params.id } });
        req.flash('success_msg', 'Manutenção atualizada com sucesso');
        res.redirect('/manutencoes');
    } catch (err) {
        req.flash('error_msg', 'Erro ao atualizar manutenção');
        res.redirect('/manutencoes/editar/' + req.params.id);
    }
};

exports.excluirManutencao = async (req, res) => {
    try {
        await Manutencao.destroy({ where: { id: req.params.id } });
        req.flash('success_msg', 'Manutenção excluída com sucesso');
        res.redirect('/manutencoes');
    } catch (err) {
        req.flash('error_msg', 'Erro ao excluir manutenção');
        res.redirect('/manutencoes');
    }
};