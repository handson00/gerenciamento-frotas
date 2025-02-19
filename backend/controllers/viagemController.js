const Viagem = require('../models/viagem');
const Veiculo = require('../models/veiculo');
const Motorista = require('../models/motorista');

exports.listarViagens = async (req, res) => {
    try {
        const viagens = await Viagem.findAll({
            include: [Veiculo, Motorista]
        });
        res.render('viagens', { viagens });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar viagens');
        res.redirect('/');
    }
};

exports.cadastrarViagem = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        const motoristas = await Motorista.findAll();
        res.render('cadastrarViagem', { veiculos, motoristas });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar dados para cadastro');
        res.redirect('/viagens');
    }
};

exports.salvarViagem = async (req, res) => {
    const { destino, data_saida, data_retorno, status, veiculo_id, motorista_id } = req.body;
    try {
        await Viagem.create({ destino, data_saida, data_retorno, status, veiculo_id, motorista_id });
        req.flash('success_msg', 'Viagem cadastrada com sucesso');
        res.redirect('/viagens');
    } catch (err) {
        req.flash('error_msg', 'Erro ao cadastrar viagem');
        res.redirect('/viagens/cadastrar');
    }
};

exports.editarViagem = async (req, res) => {
    try {
        const viagem = await Viagem.findByPk(req.params.id);
        const veiculos = await Veiculo.findAll();
        const motoristas = await Motorista.findAll();
        if (!viagem) {
            req.flash('error_msg', 'Viagem não encontrada');
            return res.redirect('/viagens');
        }
        res.render('editarViagem', { viagem, veiculos, motoristas });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar viagem');
        res.redirect('/viagens');
    }
};

exports.atualizarViagem = async (req, res) => {
    const { destino, data_saida, data_retorno, status, veiculo_id, motorista_id } = req.body;
    try {
        await Viagem.update({ destino, data_saida, data_retorno, status, veiculo_id, motorista_id }, { where: { id: req.params.id } });
        req.flash('success_msg', 'Viagem atualizada com sucesso');
        res.redirect('/viagens');
    } catch (err) {
        req.flash('error_msg', 'Erro ao atualizar viagem');
        res.redirect('/viagens/editar/' + req.params.id);
    }
};

exports.excluirViagem = async (req, res) => {
    try {
        await Viagem.destroy({ where: { id: req.params.id } });
        req.flash('success_msg', 'Viagem excluída com sucesso');
        res.redirect('/viagens');
    } catch (err) {
        req.flash('error_msg', 'Erro ao excluir viagem');
        res.redirect('/viagens');
    }
};